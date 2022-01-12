require("dotenv").config();
const dbConnection = require("./connection")
const seeder = require("../database/seeders")

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

runSeeders()