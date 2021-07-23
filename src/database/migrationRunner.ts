require("dotenv").config();
const dbConnection = require("../database/connection.ts");
const baseMigrations = require("../database/migrations/all.ts")

// Group of migrations
const Migrations = [baseMigrations];
/**
 * TO create table and run migrations
 */
const runMigrations = async() => {
    console.log('Runnig migrations');
    try {
        Migrations.forEach((migration) => {
            migration.up(dbConnection)
        });
    } catch (e) {
        console.log('Migration error: ' + JSON.stringify(e, null, 2))
    }

    process.exit(0)
}

const args = process.argv;

if(args.indexOf('up') !== -1){
    runMigrations()
}