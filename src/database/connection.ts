const mysql = require("mysql")
const config =  require("../config/db.ts")

var connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PSWD,
    database: config.DB_NAME,
    port: config.DB_PORT,
});

try {
    connection.connect(err => {
        if(err) throw err;
        console.log('Sucessfully connected to database')
    });
    // To do query
    connection.on('enqueue', sequence => {
        // console.log('sequence',sequence.sql)
    })
} catch(err) {
    console.log(`Unable to connect with the database with these configuration.Error: ${err.message}`)
}

module.exports = connection;