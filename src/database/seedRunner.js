require("dotenv").config();
const dbConnection = require("../database/connection.ts")
const seeder = require("../database/seeders/all.ts")

// Group of seeds
const Seeders = [seeder];

/**
* TO populate records
*/
const runSeeders = async() => {
   console.log('Runnig seeders');
   try {
       await Promise.all(
        Seeders.map(async(seed) => {
           await seed.up(dbConnection)
       })
       ).catch(e => {
           console.log('Seeders Error: '+JSON.stringify(e, null, 2))
       })

       dbConnection.end()
   } catch (e) {
       console.log('Seeders error: ' + JSON.stringify(e, null, 2))
   }

   process.exit(0)
}

const args = process.argv;

if(args.indexOf('up') !== -1){
    runSeeders()
}