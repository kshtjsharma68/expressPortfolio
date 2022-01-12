
class Basic {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists basic(
            id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
            user_id int unsigned,
            type varchar(50),
            degree varchar(50),
            about TEXT,
            client varchar(20),
            projects varchar(20),
            hours varchar(20),
            teams varchar(20),
            PRIMARY KEY(id),
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

module.exports = new Basic();