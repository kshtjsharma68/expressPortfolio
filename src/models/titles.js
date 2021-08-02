const db = require('../database/connection');
const Base = require('./base')

function Titles(connection) {
    this.table = 'titles';
    Base.call(this, connection)
}

//Extending the class and setting methods
Titles.prototype = Object.create(Base.prototype);

/**
 * Get all titles
 */
Titles.prototype.all = function() {
    let sql = `SELECT * FROM ${this.table}`;
    return this.query({ sql })
}
/**
 * Adding new title record
 */
Titles.prototype.add = function({name = ""}) {
    let sql = `INSERT INTO ${this.table} (name) VALUES ('${name}')`;
    return this.query({sql})
}

/**
 * Remove a record by id
 */
Titles.prototype.removeById = function(id) {
    let sql = `DELETE FROM ${this.table} WHERE id=${id}`
    return this.query({sql})
}

module.exports = new Titles(db);