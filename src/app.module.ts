/**
 * @fileoverview Root module of the PizzaDao MoltoBene Telegram Bot application
 * @module app.module
 */

import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { KnexModule } from './modules/knex/knex.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { UserModule } from './modules/user/user.module';
import { CountryModule } from './modules/country/country.module';
import { CityModule } from './modules/city/city.module';
import { CommonModule } from './modules/common/common.module';
import { PrivateChatMiddleware } from './middleware/chat-type.middleware';
import { BroadcastModule } from './modules/broadcast/broadcast.module';
import { EventDetailModule } from './modules/event-detail/event-detail.module';
import { CapturedGroupModule } from './modules/captured-group/captured-group.module';
import { CapturedGroupService } from './modules/captured-group/captured-group.service';
import { HostInboundModule } from './modules/host-inbound/host-inbound.module';

// Load environment variables
config();

/**
 * Root module of the application that configures and bootstraps all required modules
 * @class AppModule
 * @description Configures the main application module with all necessary dependencies,
 * including the Telegram bot, database connection, and various feature modules.
 */
@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule, CapturedGroupModule],
      useFactory: (configService: ConfigService, capturedGroupService: CapturedGroupService) => {
        const token = configService.get<string>('TELEGRAM_BOT_TOKEN');
        if (!token) {
          throw new Error('TELEGRAM_BOT_TOKEN is not defined in the environment variables');
        }
        return {
          token,
          launchOptions:
            process.env.ENABLE_WEBHOOK === 'true'
              ? {
                  webhook: {
                    domain: configService.get<string>('WEBHOOK_DOMAIN') || '',
                    path: '/webhook',
                  },
                }
              : {},
          // Passive group-capture runs FIRST (always calls next()), then the
          // existing private-chat gate, then all @On/@Command/@Start handlers.
          middlewares: [capturedGroupService.middleware(), new PrivateChatMiddleware().use()],
        };
      },
      inject: [ConfigService, CapturedGroupService],
    }),

    UserModule,
    // HostInboundModule must register BEFORE BroadcastModule/CommonModule so its
    // @On('photo')/@On('document') media handlers get first dibs on the middleware
    // chain. Broadcast's media handlers early-return without next() when the host
    // isn't in a creating_post session, which would otherwise STOP the chain and
    // starve host submissions (no ack, nothing forwarded). HostInbound now passes
    // anything it doesn't consume downstream via @Next().
    HostInboundModule,
    WelcomeModule,
    BroadcastModule,
    CommonModule,
    KnexModule,
    CountryModule,
    CityModule,
    EventDetailModule,
    CapturedGroupModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
