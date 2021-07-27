const mysql = require("mysql")
const config =  require("../config/db.js")

let connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PSWD,
    database: config.DB_NAME,
    port: config.DB_PORT,
    multipleStatements: true
});

module.exports = function() {
    try { 
        connection.connect(err => {
            if(err) {
                console.log(JSON.stringify(err));
            } else {
                console.log('Sucessfully connected to database')
            }
        });
        // To do query
        connection.on('enqueue', sequence => {
            // console.log('sequence',sequence.sql)
        })
    } catch(err) {
        console.log(`Unable to connect with the database with these configuration.Error: ${err.message}`)
    }

    return connection
}();
