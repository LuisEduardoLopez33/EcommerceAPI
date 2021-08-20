const database = require('../configMysql')

module.exports = {

    searchUser: (user, callback) =>{
        let sql = 'SELECT * FROM user WHERE name=?';
        database.query(sql,user, (err, data) => {
            if (err) throw err
            if (data.length > 0){
                callback(data[0]);
            }else{
                callback(null)
            }
        })
    },

    insertUser: (user, okCallback, failCallback) =>{
        let sql = 'INSERT INTO user SET ?';

        database.query(sql, user, (err, data) =>{
            if (err){
                return failCallback(err);
            }else{
                return okCallback(data);
            }
        })
    }
}