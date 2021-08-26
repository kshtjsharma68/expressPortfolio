function Base(connection) {
    this.connection = connection;
    this.sql = '';
    this.data = [];
}

Base.prototype.query = function({ sql, data = [] }) { 
    let _this = this; 
    return new Promise(function(resolve, reject) {
        _this.connection.query(`${sql}`, data ,function(error, results, fields) { 
            if(error) {
                console.log('Error during query: ' + JSON.stringify({sql, error}))
                reject(error)
            }
            resolve(results)
        })
    })
}

module.exports = Base