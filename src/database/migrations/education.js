
class Education {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists education(
            id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
            user_id int unsigned,
            bachlor_start varchar(10),
            bachlor_end varchar(10),
            bachlor_title varchar(100),
            bachlor_institute varchar(100),
            bachlor_desc varchar(255),
            master_start varchar(10),
            master_end varchar(10),
            master_title varchar(100),
            master_institute varchar(100),
            master_desc varchar(255),
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

module.exports = new Education;