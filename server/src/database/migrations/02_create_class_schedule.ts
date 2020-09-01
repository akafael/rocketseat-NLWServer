/**
 * Class Schedulle Table Migration Operations
 * - Table with foreign key
 */

import Knex from 'knex';

// Create class_schedule table
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        // Add Table Fields
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // Add Foreign Key
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Delete class_schedule table
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}