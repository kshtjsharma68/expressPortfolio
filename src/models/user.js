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

User.prototype.getDevelopers = function(withAddress = true) {
    let sql = `SELECT users.id, CONCAT(users.first_name ," ", users.last_name) AS Name, users.profile_image, developer.dob, developer.freelancer from users `;
    sql += `LEFT OUTER JOIN developer ON users.id = developer.user_id `;
    sql += ` WHERE users.role_id = 2`;
    return this.query({
        sql
    })
}

/**
 * 
 * @param {id} id 
 */
User.prototype.getDeveloperById = function(id = 0 ) {
    let sql = `SELECT users.*, developer.*, developer_address.* from users `;
    sql += `LEFT OUTER JOIN developer ON users.id = developer.user_id `;
    sql += `LEFT OUTER JOIN developer_address ON users.id = developer_address.user_id `;
    sql += ` WHERE users.id = ${id} LIMIT 1`;
    return this.query({
        sql
    })
}

module.exports = new User(db);