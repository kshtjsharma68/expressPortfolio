
class Projects {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists projects(
            id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
            user_id int unsigned,
            name varchar(50),
            link varchar(50),
            image varchar(255),
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
            } catch (e) {
                reject(JSON.stringify(e, null, 2))
            }
        })
    }
}

module.exports = new Projects();