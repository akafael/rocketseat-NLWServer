/**
 * Database Connection Management
 */

import knex from 'knex'; // Query Builder
import path from 'path'; // Path solver

// Create new connection with database
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, // Required for SQLite since it
});

// Export connection as var db
export default db;