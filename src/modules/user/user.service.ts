/**
 * @fileoverview User service for managing user data and operations
 * @module user.service
 */

import { Injectable } from '@nestjs/common';
import { KnexService } from '../knex/knex.service';
import { IUser } from './user.interface';

/**
 * Service for managing user-related operations
 * @class UserService
 * @description Handles user data management, registration, and queries
 */
@Injectable()
export class UserService {
  constructor(private readonly knexService: KnexService) {}

  /** Set of registered user IDs */
  private registeredUsers = new Set<number>();

  /**
   * Adds a new user to the database
   * @param {IUser} user - The user object to add
   * @returns {Promise<void>}
   */
  async addUser(user: IUser): Promise<void> {
    await this.knexService.knex<IUser>('user').insert(user);
  }

  /**
   * Retrieves all users from the database
   * @returns {Promise<IUser[]>} Array of all user objects
   */
  async getAllUsers(): Promise<IUser[]> {
    return this.knexService.knex('user').select('*');
  }

  /**
   * Checks if a user is registered in the system
   * @param {string | null} userId - The Telegram user ID to check
   * @returns {Promise<boolean>} True if the user is registered
   */
  async isUserRegistered(userId: string | null): Promise<boolean> {
    if (!userId) {
      return false;
    }

    const user: IUser | undefined = await this.knexService
      .knex<IUser>('user')
      .where({ telegram_id: userId })
      .first();
    return !!user;
  }

  /**
   * Gets the set of all registered user IDs
   * @returns {Set<number>} Set of registered user IDs
   */
  getAllRegisteredUsers(): Set<number> {
    return this.registeredUsers;
  }

  /**
   * Finds a user by their Telegram ID
   * @param {string} userId - The Telegram user ID to find
   * @returns {Promise<IUser | undefined>} The found user or undefined
   */
  async findUser(userId: string): Promise<IUser | undefined> {
    return this.knexService.knex<IUser>('user').where({ telegram_id: userId }).first();
  }

  /**
   * Updates a specific field for a user
   * @param {string} telegram_id - The Telegram user ID
   * @param {string} field - The field to update
   * @param {string} value - The new value
   * @returns {Promise<void>}
   */
  async updateUserField(telegram_id: string, field: string, value: string): Promise<void> {
    await this.knexService
      .knex('user')
      .where({ telegram_id })
      .update({ [field]: value });
  }

  /**
   * Retrieves all regions from the database
   * @returns {Promise<{ id: string; name: string }[]>} Array of region objects
   */
  async getAllRegions(): Promise<{ id: string; name: string }[]> {
    return this.knexService.knex('region').select('id', 'name');
  }

  /**
   * Checks if a pizza name already exists in the database
   * @param {string} pizzaName - The pizza name to check
   * @returns {Promise<boolean>} True if the pizza name exists
   */
  async isPizzaNameExists(pizzaName: string): Promise<boolean> {
    const existingPizzaName: IUser | undefined = await this.knexService
      .knex<IUser>('user')
      .where('pizza_name', pizzaName)
      .first();

    return !!existingPizzaName;
  }

  async isDiscordNameExists(discordName: string): Promise<boolean> {
    const existing: IUser | undefined = await this.knexService
      .knex<IUser>('user')
      .where('discord_name', discordName)
      .first();

    return !!existing;
  }
}
