const database = require('../configMysql');


module.exports = {

    searchProduct: (id, callback) =>{
        let sql = 'SELECT * FROM product WHERE id=?'
        database.query(sql, id, (err, data) =>{
            if (err) throw err
            if (data.length>0){
                callback(data[0])
            }else {
                callback(null)
            }
        })
    },

    consultProduct: (callback) =>{
        let sql = 'SELECT * FROM product'

        database.query(sql, (err, data) =>{
            if (err) throw err
            if (data.length>0){
                callback(data[0])
            }else {
                callback(null)
            }
        })
    },

    addProduct: (product, okCallback, failCallback) =>{
        let sql = 'INSERT INTO product SET ?'
        database.query(sql, product, (err, data) =>{
            if (err){
                return failCallback(err)
            }else {
                return okCallback(data)
            }
        })
    },

    updateProduct: () =>{},

    deleteProduct: () => {}
}