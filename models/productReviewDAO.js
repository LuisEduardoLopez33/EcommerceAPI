const database = require('../configMysql')

module.exports = {

    /*AGREGAR UNA RESEÑA DE UN PRODUCTO*/
    addReview: (Product_Review, callback) => {
        let sql = 'INSERT INTO Product_Review SET ?'
        database.query(sql, Product_Review, (err, data) => {
            if (err)
                return callback(null)
            else
                return callback (data)
        })
    },

    /*OBTENER TODAS LAS REVIEWS POR ID DE PRODUCTO*/
    getProductReview: (product_id, callback) => {
        let sql = 'SELECT * FROM Product_Review WHERE Product_Review.product_id = ?'
        database.query(sql, product_id, (err, data) => {
            if(err) throw err
            if(data !=null)
                callback(data)
            else
                callback(null)
        })
    }



}







