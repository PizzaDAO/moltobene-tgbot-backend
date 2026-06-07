/**
 * @fileoverview Module for passive Telegram group capture + rsvpizza export
 * @module captured-group.module
 */

import { Module } from '@nestjs/common';
import { CapturedGroupService } from './captured-group.service';
import { CapturedGroupController } from './captured-group.controller';
import { KnexModule } from '../knex/knex.module';

/**
 * Module wiring the passive group-capture service + export endpoint.
 * @class CapturedGroupModule
 * @description Exposes {@link CapturedGroupService} so its capture middleware can
 * be plugged into the TelegrafModule, and registers the `/captured-groups`
 * export controller.
 */
@Module({
  imports: [KnexModule],
  providers: [CapturedGroupService],
  controllers: [CapturedGroupController],
  exports: [CapturedGroupService],
})
export class CapturedGroupModule {}
