/**
 * User Table Migration Operations
 * - Basic Table example
 */

import Knex from 'knex';

// Create User Table
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        // Add Table Field
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

// Delete User Table
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}