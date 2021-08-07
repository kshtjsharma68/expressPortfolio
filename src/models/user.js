const db = require('../database/connection');
const Base = require('./base')
const bcrypt = require("bcrypt");

function User(connection) {
    this.table = 'users';
    this.columns = ['role_id', 'first_name', 'last_name', 'email', 'profile_image'];
    this.protectedColumns = ['password'];
    this.hashPassword = async function(password) {
        //generate salt to hash password
        let salt = await bcrypt.genSalt(5); 
        //now set password
        return await bcrypt.hash(password, salt)

    }
    Base.call(this, connection)
}

//Extending the class and setting methods
User.prototype = Object.create(Base.prototype);

/**
 * Adding new user record
 */
User.prototype.add = function({
    role_id = 2, 
    first_name = '', 
    last_name = '', 
    email = '', 
    profile_image = '', 
    password = ''
}) {
    return this.hashPassword(password)
        .then(res => { 
        let values = [role_id,first_name, last_name, email, profile_image, res].map(r => `'${r}'`).join(',');
        let sql = `INSERT INTO ${this.table} (${[...this.columns, ...this.protectedColumns].join(',')}) VALUES (${values})`;
        return this.query({ sql })
    }).catch(err => {
        return {};
    });
    
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