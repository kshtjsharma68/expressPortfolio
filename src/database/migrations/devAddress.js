
class devAddress {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists developer_address(
            id TINYINT unsigned NOT NULL AUTO_INCREMENT,
            user_id int unsigned,
            line1 varchar(50),
            postcode varchar(50),
            city varchar(50),
            country varchar(50),
            PRIMARY KEY (id),
            FOREIGN KEY (user_id) REFERENCES users(id)
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

module.exports = new devAddress();