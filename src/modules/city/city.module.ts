/**
 * @fileoverview City module for managing city-related functionality
 * @module city.module
 */

import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { KnexModule } from '../knex/knex.module';
import { CountryModule } from '../country/country.module';
import { RegionModule } from '../region/region.module';

/**
 * Module for managing city data and operations
 * @class CityModule
 * @description Handles city-related operations, including retrieving
 * cities by country and managing city data
 */
@Module({
  imports: [KnexModule, CountryModule, RegionModule],
  providers: [CityService],
  controllers: [CityController],
  exports: [CityService],
})
export class CityModule {}
