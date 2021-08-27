const database = require('../configMysql');
const fs = require('fs')
const path = require('path')

module.exports = {

    /*QUERY PARA OBTENER LOS PRODUCTOS EN LA VISTA PRINCIPAL DE PRODUCTOS*/
    getAllProducts: (callback) => {
      let sql = 'SELECT Product.id, Product.name, Product.price, brand.name AS brand FROM Product join brand where brand.id = product.brand_id'
      database.query(sql, (err, data) => {
          if (err) throw err
          if (data != null){
              callback(data)
          }else{
              callback(null)
          }
      })
    },

    /*QUERY PARA OBTENER LOS DATOS DEL PRODUCTO EN LA VISTA DE DETALLES DEL PRODUCTO*/
    productDetails: (id, callback) => {
      let sql = 'SELECT product.id,product.name, product.model, brand.name AS brand, product.category_id category, product.description, product.price, product.stock, product.size, product.color FROM product\n' +
          ' JOIN brand ON product.id =? and product.brand_id = brand.id'
      database.query(sql, id, (err, data) => {
          if (err) throw err
          if (data != null){
              callback(data[0])
          }else{
              callback(null)
          }
      })
    },

    productImagen: (id, callback) => {
        let sql = 'select * from product_image where product_id = ? '
        database.query(sql, id, (err, data) => {
            if (err) throw err
            if (data != null){
                data.map(img=>{
                    fs.writeFileSync(path.join(__dirname, '../dbimages/' + img.id + '-ecommerce.png'), img.data)
                });
                const imgdir = fs.readdirSync(path.join(__dirname,'../dbimages/'))
                data = imgdir
                callback(data[id-1])
            }else{
                callback(null)
            }
        })
    },

    productsAllImages: (callback) =>{
        let sql = 'select * from product_image'
        database.query(sql, (err, data) => {
            if (err) throw err
            if (data != null){
                data.map(img=>{
                    fs.writeFileSync(path.join(__dirname, '../dbimages/' + img.product_id + '-ecommerce.png'), img.data)
                });
                const imgdir = fs.readdirSync(path.join(__dirname,'../dbimages/'))
                data = imgdir
                callback(data)
            }else{
                callback(null)
            }
        })


    },

    /*RESEÑAS DE PRODUCTO*/
    productReview: (id, callback) => {
      let sql = 'SELECT * FROM Product_Review WHERE Product_Review.id =? '
        database.query(sql, )
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