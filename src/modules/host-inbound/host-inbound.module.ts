/**
 * @fileoverview Module that forwards inbound host DM submissions to rsvpizza.
 * @module host-inbound.module
 */

import { forwardRef, Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { HostInboundService } from './host-inbound.service';

/**
 * Module for forwarding inbound host submissions (photos + headcounts) to rsvpizza.
 * @class HostInboundModule
 */
@Module({
  imports: [forwardRef(() => CommonModule)],
  providers: [HostInboundService],
  exports: [HostInboundService],
})
export class HostInboundModule {}
