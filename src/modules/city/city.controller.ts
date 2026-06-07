/**
 * @fileoverview City controller for handling city-related HTTP requests
 * @module city.controller
 */

import {
  Controller,
  Get,
  UseGuards,
  UnauthorizedException,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { CityService } from './city.service';
import { CountryService } from '../country/country.service';
import { RegionService } from '../region/region.service';

/**
 * Guard for protecting the rsvpizza city export route with API key authentication
 * @class RsvpizzaApiKeyGuard
 * @implements {CanActivate}
 * @description Validates the presence and correctness of the API key in request
 * headers. Mirrors the existing `ApiKeyGuard` used by {@link UserController} but
 * authorizes against the dedicated `RSVPIZZA_API_KEY` env (and still accepts the
 * shared `USER_API_KEY` for backwards-compatible internal callers).
 */
@Injectable()
class RsvpizzaApiKeyGuard implements CanActivate {
  /**
   * Validates the API key from request headers
   * @param {ExecutionContext} context - The execution context
   * @returns {boolean} True if the API key is valid
   * @throws {UnauthorizedException} If the API key is invalid or missing
   */
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];
    if (
      apiKey &&
      (apiKey === process.env.RSVPIZZA_API_KEY || apiKey === process.env.USER_API_KEY)
    ) {
      return true;
    }
    throw new UnauthorizedException('Invalid API key');
  }
}

/**
 * Shape of a single city entry returned by the `/city/groups` export
 * @interface ICityGroupExport
 */
interface ICityGroupExport {
  cityName: string;
  countryName: string;
  regionName: string;
  groupId: string;
  telegramLink: string;
}

/**
 * Controller for handling city-related HTTP requests
 * @class CityController
 * @description Provides endpoints for exporting city data to external integrations
 */
@Controller('city')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly countryService: CountryService,
    private readonly regionService: RegionService,
  ) {}

  /**
   * Exports all cities with their Telegram group ids and links, joined with
   * their country and region names, for rsvpizza to sync host announcements from.
   * @returns {Promise<{ cities: ICityGroupExport[] }>} Exported city groups
   * @protected Requires valid `RSVPIZZA_API_KEY` (or `USER_API_KEY`) in `x-api-key`
   */
  @UseGuards(RsvpizzaApiKeyGuard)
  @Get('groups')
  async getCityGroups(): Promise<{ cities: ICityGroupExport[] }> {
    const cities = await this.cityService.getAllCitiesWithLinks();
    const countries = await this.countryService.getAllCountries();
    const regions = await this.regionService.getAllRegions();

    const countryById = new Map(countries.map((c) => [c.id, c]));
    const regionById = new Map(regions.map((r) => [r.id, r]));

    const result: ICityGroupExport[] = cities.map((city) => {
      const country = city.country_id ? countryById.get(city.country_id) : undefined;
      const region = country?.region_id ? regionById.get(country.region_id) : undefined;

      return {
        cityName: city.name ?? '',
        countryName: country?.name ?? '',
        regionName: region?.name ?? '',
        groupId: city.group_id ?? '',
        telegramLink: city.telegram_link ?? '',
      };
    });

    return { cities: result };
  }
}
