const database = require('../configMysql');


module.exports = {

    /*QUERY PARA OBTENER LOS PRODUCTOS EN LA VISTA PRINCIPAL DE PRODUCTOS*/
    getAllProducts: (callback) => {
      let sql = 'SELECT Product.id, Product.name, Product.price FROM Product';
    },

    /*QUERY PARA OBTENER LOS DATOS DEL PRODUCTO EN LA VISTA DE DETALLES DEL PRODUCTO*/
    productDetails: (id, callback) => {
      let sql = 'SELECT * FROM Product WHERE id= ? '
      database.query(sql, id, (err, data) => {
          if (err) throw err
          if (data != null){
              callback(data[0])
          }else{
              callback(null)
          }
      })
    },

    /*RESEÑAS DE PRODUCTO*/
    productReview: (id, callback) => {
      let sql = 'SELECT * FROM Product_Review WHERE Product_Review.id =? '
        database.query(sql,)
    },

    /*INSERTAR UN NUEVO PRODUCTO*/
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
    /*searchProduct: (id, callback) =>{
           let sql = 'SELECT * FROM Product WHERE id=?'
           database.query(sql, id, (err, data) =>{
               if (err) throw err
               if (data.length>0){
                   callback(data[0])
               }else {
                   callback(null)
               }
           })
       },*/

    /*consultProduct: (callback) =>{
        let sql = 'SELECT * FROM product'
        database.query(sql, (err, data) =>{
            if (err) throw err
            if (data.length>0){
                callback(data[0])
            }else {
                callback(null)
            }
        })
    },*/

    updateProduct: () =>{},

    deleteProduct: () => {}
}