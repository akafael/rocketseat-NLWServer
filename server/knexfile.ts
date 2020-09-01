/**
 * Settings file Knex Query Builder
 */

import path from 'path';

// module.exports sintax required for k
module.exports = {
    client: 'sqlite3',
    // Database connection file
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    /* 
     * Migrations files
     * - Translate Database structure into do and undo operations
     * - Operations execution sorted by filename
     */ 
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    userNullAsDefault: true, // Required for SQLite
};