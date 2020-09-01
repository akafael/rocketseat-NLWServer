/**
 * Classes Table Migration Operations
 * - Table with foreign key example
 */

import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        // Add Table Field
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // Add Foreign Key
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); // Delete all classes from deleted user
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}