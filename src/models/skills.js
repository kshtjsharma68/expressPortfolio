const db = require('../database/connection');
const Base = require('./base')

function Skills(connection) {
    this.table = 'skills';
    Base.call(this, connection)
}

//Extending the class and setting methods
Skills.prototype = Object.create(Base.prototype);

/**
 * Get all Skills
 */
Skills.prototype.all = function() {
    let sql = `SELECT * FROM ${this.table}`;
    return this.query({ sql })
}
/**
 * Adding new title record
 */
Skills.prototype.add = function({name = ""}) {
    let sql = `INSERT INTO ${this.table} (name) VALUES ('${name}')`;
    return this.query({sql})
}

/**
 * Remove a record by id
 */
Skills.prototype.removeById = function(id) {
    let sql = `DELETE FROM ${this.table} WHERE id=${id}`
    return this.query({sql})
}

module.exports = new Skills(db);