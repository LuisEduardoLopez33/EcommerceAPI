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
    },

    /*DELETE CON EL ID DEL CARRITO*/
    deleteByCartID: (cart_id, callback) => {
        let sql = 'DELETE FROM Cart WHERE Cart.id = ?'
        database.query(sql,cart_id, (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    },

    /*DELETE CON EL ID DEL CLIENTE*/
    deleteByCustomerID: (customer_id, callback) => {
        let sql = 'DELETE FROM Cart WHERE Cart.customer_id = ?'
        database.query(sql, customer_id, (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    },

    /*UPDATE CARRITO CON EL ID DEL CARRITO*/
    updateCartByCartID: (cart, callback) => {
        let sql = 'UPDATE Cart SET product_id = ?, customer_id = ?, amount = ?, subtotal = ? WHERE id = ?'
        database.query(sql, [cart.product_id, cart.customer_id, cart.amount, cart.subtotal, cart.id], (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    }
}
