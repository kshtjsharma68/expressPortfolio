
import RolesSeeder from './roles';
import UsersSeeder from './users';

class Seeders {
    /**
     * Run seeders on db
     */
    up(connection) {
        return new Promise((resolve, reject) => {
            const allSeeders = [RolesSeeder, UsersSeeder]
            try{
                allSeeders.forEach((seed, index) => {
                    connection.query(seed, (error, result, field) => {
                        if(error) {
                            console.log(
                                `error in query queryIndex ${index} error =${JSON.stringify(error, null, 2)}`
                              );
                        } else {
                            console.log(`${Object.keys({seed})[0]} Seeder ran successfully.`)
                        }
                        if(index + 1 === allSeeders.length) {
                            resolve()
                        }
                    })
                })
            } catch(e) {
                reject(JSON.stringify(e, null, 2))
            }

        })
    }
}

module.exports = new Seeders();