const db = require('../database/connection');
const Base = require('./base')

function User(connection) {
    this.table = 'users';
    Base.call(this, connection)
}

//Extending the class and setting methods
User.prototype = Object.create(Base.prototype);

/**
 * Adding new user record
 */
User.prototype.add = function(params) {
    console.log('inside add', this.connection)
}

/**
 * Check if user exists with email and password
 */
User.prototype.getUserWithEmail = function( email = '' ) { 
    let sql = `SELECT id, email, password from ${this.table} WHERE email = ` + this.connection.escape(email);
    return this.query({
        sql
    })
}

module.exports = new User(db);