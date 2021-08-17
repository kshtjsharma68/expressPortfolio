const db = require('../database/connection');
const Base = require('./base')

function Social(connection) {
    this.table = 'developer_skills';
    this.columns = ['user_id', 'skill_id', 'fill'];
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
Social.prototype.add = function({user_id, twitter, facebook, instagram, linkedin, skype}) { 
    this.data = [user_id, twitter, facebook, instagram,linkedin, skype];  
    this.sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?,?,?,?)";
    return this.runQuery()
}

Social.prototype.getByUserId = function(id) {
    this.data = []
    this.sql = `SELECt * from ${this.table} WHERE user_id = ${id}`;
    return this.runQuery()
}

Social.prototype.updateById = function(id, fields) {
    let { twitter, facebook, instagram, skype, linkedin } = fields; 
    this.data = [ twitter, facebook, instagram, skype, linkedin]; 
    this.sql = `UPDATE ${this.table} SET twitter=?, facebook=?, instagram=?, skype=?, linkedin=? WHERE id = ${id}`;
    return this.runQuery()
}

module.exports = new Social(db);