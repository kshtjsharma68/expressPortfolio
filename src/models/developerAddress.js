const db = require('../database/connection');
const Base = require('./base')

function Address(connection) {
    this.table = 'developer_address';
    this.columns = ['user_id', 'line1', 'postcode', 'city', 'country'];
    Base.call(this, connection)
}

//Extending the class and setting methods
Address.prototype = Object.create(Base.prototype);

Address.prototype.runQuery = function() {
    return this.query({sql: this.sql, data: this.data})
                .then(r => r)
                .catch(err => {
                    console.log('query error', err.sqlMessage)
                    return []
                });
}

/**
 * Get all titles
 */
Address.prototype.all = function() {
    let sql = `SELECT * FROM ${this.table}`;
    return this.query({ sql })
}
/**
 * Adding new title record
 */
Address.prototype.add = function({user_id, line1, postcode, city, country}) { 
    let data = [user_id, line1, postcode, city, country];  
    let sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?,?,?)";
    return this.query({sql, data})
            .then(r => r)
            .catch(err => console.log('query error', err.sqlMessage))
}

/**
 * Remove a record by id
 */
Address.prototype.removeById = function(id) {
    let sql = `DELETE FROM ${this.table} WHERE id=${id}`
    return this.query({sql})
}

Address.prototype.getByUserId = function(id) {
    this.data = []
    this.sql = `SELECt * from ${this.table} WHERE user_id = ${id}`;
    return this.runQuery()
}

module.exports = new Address(db);