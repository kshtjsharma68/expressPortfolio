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
User.prototype.checkUserWithEmailAndPassword = async function({ email = '',password = '', ...rest }) { 
    let sql = `SELECT email, password from ${this.table} WHERE email = ` + this.connection.escape(email);
    var result = await this.query({
        sql
    })
    
    return result.then(res => { 
        if(res.length) return true
        throw Error('Not valid')
    })
    .catch(e => {
        console.log(e.message)
        return false
    })
}

module.exports = new User(db);