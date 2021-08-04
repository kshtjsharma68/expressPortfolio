
class Developer {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE developer(
            id TINYINT unsigned NOT NULL AUTO_INCREMENT,
            first_name varchar(50),
            last_name varchar(50),
            email varchar(50),
            dob DATE,
            phone int(11),
            website varchar(50),
            freelancer BIT,
            PRIMARY KEY (id)
        );`;

        return await new Promise((resolve, reject) => {
            try {
                const queries = [ROLE_SQL];
                queries.forEach((sql, index) => {
                    connection.query(`${sql}`, (error, rows, fields) => {
                        if(error) {
                            console.log(
                                `Error in query queryIndex ${index} error =${JSON.stringify(error, null, 2)}`
                              );
                        }

                        if(index + 1 === queries.length) {
                            resolve()
                        }
                    })
                   });
            } catch (e) {console.log(e)
                reject(JSON.stringify(e, null, 2))
            }
        })
    }
}

module.exports = new Titles();