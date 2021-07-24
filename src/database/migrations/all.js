
class Migrations {
    /**
     * Run migration on call
     */
    async up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists roles (
            id TINYINT unsigned NOT NULL AUTO_INCREMENT,
            role_name varchar(15) ,
            role_description varchar(120) ,
            PRIMARY KEY (id))`;

        const USER_SQL = `CREATE TABLE if not exists users (
            id int unsigned NOT NULL AUTO_INCREMENT,
            role_id TINYINT unsigned NOT NULL,
            first_name varchar(20),
            last_name varchar(20),
            email varchar(40),
            profile_image varchar(255),
            password varchar(30) NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (role_id) REFERENCES roles(id),
            INDEX (email))`;

        return await new Promise((resolve, reject) => {
            try {
                const queries = [ROLE_SQL, USER_SQL];
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

module.exports = new Migrations();