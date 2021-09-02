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
Developer.prototype.add = function({user_id, dob, phone, website, freelancer}) { 
    dob = dob ? new Date(dob): new Date;
    let data = [user_id, dob, phone, website, freelancer];  
    let sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?,?,?)";
    return this.query({sql, data})
            .then(r => r)
            .catch(err => console.log('query error', err.sqlMessage))
}

/**
 * Remove a record by id
 */
Developer.prototype.removeById = function(id) {
    let sql = `DELETE FROM ${this.table} WHERE id=${id}`
    return this.query({sql})
}

/**
 * Get a record by user_id
 */
Developer.prototype.getByUserId = function(user_id) {
    let sql = `SELECT * FROM ${this.table} WHERE user_id=${user_id}`
    return this.query({sql})
}

module.exports = new Developer(db);