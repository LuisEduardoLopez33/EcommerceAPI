const database = require('../configMysql');

module.exports = {

    /*QUERY PARA INSERTAR UN PEDIDO*/
    insertOrder: (order, callback) => {
        let sql = 'INSERT INTO Ecommerce.Order SET ?'
        database.query(sql, order, (err, data) => {
            if (err)
                return callback(null)
            else
                return callback (data)
        })
    },

    /*QUERY PARA OBTENER PEDIDO POR EL ID DEL USUARIO*/
    getOrderByCustomerID: (customer_id, callback) => {
        let sql = 'SELECT Ecommerce.Order.id, Ecommerce.Order.product_id, Product.name, Ecommerce.Order.customer_id, Customer.name, Ecommerce.Order.amount, Ecommerce.Order.subtotal, Ecommerce.Order.status, Ecommerce.Order.date, Ecommerce.Order.address_id, Address.description, City.id,City.name,State.id,State.name FROM Ecommerce.Order \n' +
            'LEFT JOIN Product ON Ecommerce.Order.product_id = Product.id\n' +
            '    LEFT JOIN Customer ON Ecommerce.Order.customer_id = Customer.id\n' +
            '    LEFT JOIN Address ON Ecommerce.Order.address_id = Address.id\n' +
            '    LEFT JOIN City ON Address.city_id = City.id\n' +
            '    LEFT JOIN State ON City.State_id = State.id\n' +
            '    WHERE Customer.id = ?'
        database.query(sql, customer_id, (err,data) => {
            if(err) throw err
            if(data !=null)
                callback(data)
            else
                callback(null)
        })
    }
}