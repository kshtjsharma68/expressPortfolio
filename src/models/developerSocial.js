const db = require('../database/connection');
const Base = require('./base')

function Social(connection) {
    this.table = 'developer_social';
    this.columns = ['user_id', 'twitter', 'facebook', 'instagram', 'linkedin', 'skype'];
    this.sql = '';
    this.data = [];
    Base.call(this, connection)
}

//Extending the class and setting methods
Social.prototype = Object.create(Base.prototype);

Social.prototype.runQuery = function() {
    return this.query({sql: this.sql, data: this.data})
                .then(r => r)
                .catch(err => {
                    console.log('query error', err.sqlMessage)
                    return []
                });
}

/**
 * Adding new title record
 */
Social.prototype.add = function({user_id, twitter, facebook, instagram,linkedin, skype}) { 
    this.data = [user_id, twitter, facebook, instagram,linkedin, skype];  
    this.sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?,?,?)";
    return this.runQuery()
}

Social.prototype.getByUserId = function(id) {
    thi.sql = `SELECt * from ${this.table} WHERE user_id = ${id}`
}

module.exports = new Social(db);