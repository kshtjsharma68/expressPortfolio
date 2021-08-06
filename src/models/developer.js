const db = require('../database/connection');
const Base = require('./base')

function Developer(connection) {
    this.table = 'developer';
    this.columns = ['user_id', 'dob', 'phone', 'website', 'freelancer'];
    Base.call(this, connection)
}

//Extending the class and setting methods
Developer.prototype = Object.create(Base.prototype);

/**
 * Get all titles
 */
Developer.prototype.all = function() {
    let sql = `SELECT * FROM ${this.table}`;
    return this.query({ sql })
}
/**
 * Adding new title record
 */
Developer.prototype.add = function(params) {
    let values = [...params].map(r => `'${r}'`).join(',');
    let sql = `INSERT INTO ${this.table} (${this.columns.join(',')}) VALUES (${values})`;
    console.log(sql)
    return this.query({sql})
}

/**
 * Remove a record by id
 */
Developer.prototype.removeById = function(id) {
    let sql = `DELETE FROM ${this.table} WHERE id=${id}`
    return this.query({sql})
}

module.exports = new Developer(db);