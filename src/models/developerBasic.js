const db = require('../database/connection');
const Base = require('./base')

function devBasic(connection) {
    this.table = 'basic';
    this.columns = ['user_id', 'type', 'degree', 'about', 'client', 'projects', 'hours', 'teams'];
    this.sql = '';
    this.data = [];
    Base.call(this, connection)
}

//Extending the class and setting methods
devBasic.prototype = Object.create(Base.prototype);

devBasic.prototype.runQuery = function() {
    return this.query({sql: this.sql, data: this.data})
                .then(r => r)
                .catch(err => {
                    console.log('query error', err.sqlMessage)
                    return []
                });
}

/**
 * Adding new basic record
 */
devBasic.prototype.add = function({user_id, type, degree, about, clients, projects, hours, teams}) {     
    type = type.join(',');
    this.data = [user_id, type, degree, about, clients, projects, hours, teams];  
    this.sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?,?,?,?,?,?)"; console.log(this.sql)
    return this.runQuery()
}

/**
 * Check if user record exists
 */
devBasic.prototype.ifExists = function({user_id}) {
    this.sql = `SELECT * FROM ${this.table} WHERE user_id = ${user_id}`;
    return this.runQuery();
}

/**
 * Get basic information by user
 */
devBasic.prototype.getByUserId = function(user_id) {
    this.sql = `SELECT * FROM ${this.table} WHERE user_id = ${user_id}`;
    return this.runQuery();
}

module.exports = new devBasic(db);