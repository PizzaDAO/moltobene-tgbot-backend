/**
 * @fileoverview Service for managing city-related operations
 * @module city.service
 */

import RunCache from 'run-cache';
import { Injectable } from '@nestjs/common';
import { KnexService } from '../knex/knex.service';
import { ICity } from './city.interface';

/**
 * Service for managing city data and operations
 * @class CityService
 * @description Handles city-related operations, including retrieving
 * cities by country, finding cities by ID or group ID, and managing
 * city data
 */
@Injectable()
export class CityService {
  constructor(private readonly knexService: KnexService) {}

  /**
   * Retrieves all cities from the database
   * @returns {Promise<ICity[]>} Array of all cities
   */
  async getAllCities(): Promise<ICity[]> {
    const cacheKey = 'cities:all';

    const cachedCities = await RunCache.get(cacheKey);

    if (cachedCities) {
      return JSON.parse(cachedCities as string) as ICity[];
    }
    const cities = await this.knexService
      .knex<ICity>('city')
      .select('id', 'name', 'group_id', 'country_id');

    await RunCache.set({ key: cacheKey, value: JSON.stringify(cities) });

    return cities;
  }

  /**
   * Retrieves all cities including their Telegram group id and link
   * @returns {Promise<ICity[]>} Array of all cities with `group_id` + `telegram_link`
   * @description Like {@link getAllCities} but also selects `telegram_link`, used by
   * the `/city/groups` export endpoint. Cached separately under its own key.
   */
  async getAllCitiesWithLinks(): Promise<ICity[]> {
    const cacheKey = 'cities:all:with_links';

    const cachedCities = await RunCache.get(cacheKey);

    if (cachedCities) {
      return JSON.parse(cachedCities as string) as ICity[];
    }

    const cities = await this.knexService
      .knex<ICity>('city')
      .select('id', 'name', 'group_id', 'telegram_link', 'country_id');

    await RunCache.set({ key: cacheKey, value: JSON.stringify(cities) });

    return cities;
  }

  /**
   * Retrieves all cities in a specific country
   * @param {string} countryId - The ID of the country
   * @returns {Promise<ICity[]>} Array of cities in the country
   */
  async getCitiesByCountry(countryId: string): Promise<ICity[]> {
    return this.knexService
      .knex('city')
      .where({ country_id: countryId })
      .select('id', 'name', 'group_id', 'telegram_link', 'country_id');
  }

  /**
   * Retrieves cities by multiple country IDs
   * @param {string[]} country_ids - Array of country IDs to filter cities by
   * @returns {Promise<ICity[]>} Array of cities matching the country IDs
   */
  async getCitiesByCountryIds(country_ids: string[]): Promise<ICity[]> {
    const cacheKey = `cities:country_ids:${country_ids.join(',')}`;
    const cachedCities = await RunCache.get(cacheKey);

    if (cachedCities) {
      return JSON.parse(cachedCities as string) as ICity[];
    }

    const cities = await this.knexService
      .knex<ICity>('city')
      .whereIn('country_id', country_ids)
      .select('id', 'name', 'group_id', 'telegram_link', 'country_id');

    await RunCache.set({ key: cacheKey, value: JSON.stringify(cities) });

    return cities;
  }

  /**
   * Retrieves cities by multiple city IDs
   * @param {string[]} city_ids - Array of city IDs to retrieve
   * @returns {Promise<ICity[]>} Array of cities matching the provided IDs
   */
  async getCitiesByCityIds(city_ids: string[]): Promise<ICity[]> {
    const cacheKey = `cities:ids:${city_ids.join(',')}`;
    const cachedCities = await RunCache.get(cacheKey);

    if (cachedCities) {
      return JSON.parse(cachedCities as string) as ICity[];
    }

    const cities = await this.knexService
      .knex<ICity>('city')
      .whereIn('id', city_ids)
      .select('id', 'name', 'group_id', 'telegram_link', 'country_id');

    await RunCache.set({ key: cacheKey, value: JSON.stringify(cities) });

    return cities;
  }

  /**
   * Gets all cities belonging to a specific region
   * @param {string} regionId - The unique identifier of the region
   * @returns {Promise<ICity[]>} Array of cities with their details
   */
  async getCitiesByRegionId(regionId: string): Promise<ICity[]> {
    return this.knexService
      .knex('city')
      .join('country', 'city.country_id', 'country.id')
      .where('country.region_id', regionId)
      .select('city.id as city_id', 'city.name as name', 'city.group_id', 'city.telegram_link');
  }

  /**
   * Finds a city by its ID
   * @param {string} cityId - The ID of the city to find
   * @returns {Promise<ICity | null>} The found city or null if not found
   */
  async getCityById(cityId: string): Promise<ICity | null> {
    const city = await this.knexService
      .knex<ICity>('city')
      .where('id', cityId)
      .select('id', 'name', 'country_id')
      .first();
    return city || null;
  }

  // async updateCityAdmins(cityId: string, adminIds: string[]): Promise<void> {
  //   // Validate that all adminIds belong to users with the role 'admin'
  //   const validAdminIds = await this.knexService
  //     .knex('user')
  //     .whereIn('id', adminIds)
  //     .andWhere({ role: 'admin' })
  //     .pluck('id');

  //   // Update the city with the validated admin IDs
  //   await this.knexService.knex('city').where({ id: cityId }).update({ admin_ids: validAdminIds });
  // }

  /**
   * Finds a city by a Telegram group ID
   * @param {string | number} groupId - The Telegram group ID
   * @returns {Promise<ICity | null>} The found city or null if not found
   */
  async getCityByGroupId(groupId: string | number): Promise<ICity | null> {
    const city = (await this.knexService
      .knex('city')
      .where('group_id', groupId)
      .select('id', 'name', 'country_id')
      .first()) as ICity | undefined;
    return city || null;
  }
}
