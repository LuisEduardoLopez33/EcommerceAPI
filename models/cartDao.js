const database = require('../configMysql');

module.exports = {

    /*QUERY PARA INSERTAR UN CARRITO DE COMPRA*/
    insertCart: (cart, callback) => {
        let sql = 'INSERT INTO cart SET ?'
        database.query(sql,cart, (err,data) => {
            if (err)
                return callback(null)
            else
                return callback (data)
        })
    },

    /*QUERY PARA OBTENER EL CARRITO CON EL ID DEL CLIENTE*/
    getCartByCustomerID:(customer_id, callback) => {
        let sql = 'SELECT * FROM Cart WHERE Cart.customer_id = ?'
        database.query(sql,customer_id, (err,data) => {
            if(err) throw err
            if(data !=null)
                callback(data)
            else
                callback(null)
        })
    }
}
