require("dotenv").config();
const dbConnection = require("./connection.js")
const baseMigrations = require("./migrations/all.js")
const Roles = require("./migrations/roles.js")
const Skills = require("./migrations/skills.js")
const Developer = require("./migrations/developer.js")
const devAddress = require("./migrations/devAddress.js");
const devSocial = require("./migrations/devSocial.js");

// Group of migrations
const Migrations = [baseMigrations,Roles,Skills, Developer,devAddress,devSocial];
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