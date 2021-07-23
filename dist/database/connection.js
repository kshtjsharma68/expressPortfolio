"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const db_1 = __importDefault(require("../config/db"));
const connection = mysql_1.default.createConnection({
    host: db_1.default.DB_HOST,
    user: db_1.default.DB_USER,
    password: db_1.default.DB_PSWD,
    database: db_1.default.DB_NAME,
    port: db_1.default.DB_PORT,
});
try {
    connection.connect();
    // To do query
    connection.on('enqueue', sequence => {
        console.log(sequence.sql);
    });
}
catch (err) {
    console.log(`Unable to connect with the database with these configuration.Error: ${err.message}`);
}
module.exports = connection;
//# sourceMappingURL=connection.js.map