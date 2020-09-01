/**
 * Connections Table Migration Operations
 */

import Knex from 'knex';

// Create connections table
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        // Add Table Fields
        table.increments('id').primary();
        
        // Add Foreign Key
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        // Time stamp
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) //now() em outros
            .notNullable();
    });
}

// Undo Create connections table
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}