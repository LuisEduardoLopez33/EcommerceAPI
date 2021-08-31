const database = require('../configMysql')

module.exports = {

    searchCustomer: (mail, callback) =>{
        let sql = 'SELECT * FROM customer WHERE mail=?';
        database.query(sql,mail, (err, data) => {
            if (err) throw err
            if (data.length > 0){
                callback(data[0]);
            }else{
                callback(null)
            }
        })
    },

    insertCustomer: (customer, okCallback, failCallback) =>{
        let sql = 'INSERT INTO customer SET ?';

        database.query(sql, customer, (err, data) =>{
            if (err){
                return failCallback(err);
            }else{
                return okCallback(data);
            }
        })
    },

    /*RECUPERAR LA INFORMACION DE TODOS LOS CLIENTES*/
    getAllCustomers: (callback) => {
        let sql = 'SELECT * FROM Customer'
        database.query(sql, (err, data) => {
            if(err) throw err;
            if(data != null){
                callback(data);
            }else{
                callback(null);
            }
        })
    },

}