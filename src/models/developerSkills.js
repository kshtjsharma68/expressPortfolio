const db = require('../database/connection');
const Base = require('./base')

function devSkills(connection) {
    this.table = 'developer_skills';
    this.columns = ['user_id', 'skill_id', 'fill'];
    this.sql = '';
    this.data = [];
    Base.call(this, connection)
}

//Extending the class and setting methods
devSkills.prototype = Object.create(Base.prototype);

devSkills.prototype.runQuery = function() {
    return this.query({sql: this.sql, data: this.data})
                .then(r => r)
                .catch(err => {
                    console.log('query error', err.sqlMessage)
                    return []
                });
}

/**
 * Adding new skill record
 */
devSkills.prototype.add = function({user_id, skill_id, fill}) {   console.log(user_id,skill_id)   
    this.data = [user_id, skill_id, fill];  
    this.sql = "INSERT INTO "+this.table+" ("+this.columns.join(',')+") VALUES (?,?,?)"; 
    return this.runQuery()
}

/**
 * Check if exists
 */
devSkills.prototype.ifExists = function({user_id, skill_id}) {
    let query = `SELECT * from ${this.table} WHERE user_id = ${user_id} && skill_id = ${skill_id}`;
    this.sql = query;
    return this.runQuery();
}

devSkills.prototype.getByUserId = function(id) {
    this.data = []
    this.sql = `SELECt * from ${this.table} WHERE user_id = ${id}`;
    return this.runQuery()
}


module.exports = new devSkills(db);