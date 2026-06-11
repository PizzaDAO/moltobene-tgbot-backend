/**
 * @fileoverview Common module for shared functionality across the application
 * @module common.module
 */

import { forwardRef, Module } from '@nestjs/common';
import { WelcomeModule } from '../welcome/welcome.module';
import { CountryModule } from '../country/country.module';
import { CityModule } from '../city/city.module';
import { MembershipModule } from '../membership/membership.module';
import { CommonService } from './common.service';
import { BroadcastModule } from '../broadcast/broadcast.module';
import { UserModule } from '../user/user.module';
import { AccessModule } from '../access/access.module';
import { HostInboundModule } from '../host-inbound/host-inbound.module';

/**
 * Module for shared functionality across the application
 * @class CommonModule
 * @description Provides common services and utilities used by other modules,
 * including user state management and shared functionality
 */
@Module({
  imports: [
    forwardRef(() => WelcomeModule),
    CountryModule,
    CityModule,
    MembershipModule,
    AccessModule,
    forwardRef(() => BroadcastModule),
    UserModule,
    forwardRef(() => HostInboundModule),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
