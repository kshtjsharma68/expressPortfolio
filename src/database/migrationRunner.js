require("dotenv").config();
const dbConnection = require("./connection.js")
const baseMigrations = require("./migrations/all.js")

// Group of migrations
const Migrations = [baseMigrations];
/**
 * TO create table and run migrations
 */
const runMigrations = async() => {
    console.log('Runnig migrations');
    try {
        await Promise.all(
        Migrations.map(async(migration) => {
            await migration.up(dbConnection)
        })
        ).catch(e => {
            console.log('Migration Error: '+JSON.stringify(e, null, 2))
        })

        dbConnection.end()
    } catch (e) {
        console.log('Migration error: ' + JSON.stringify(e, null, 2))
    }

    process.exit(0)
}

const args = process.argv;

if(args.indexOf('up') !== -1){
    runMigrations()
}