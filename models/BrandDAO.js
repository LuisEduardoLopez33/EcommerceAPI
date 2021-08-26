const database = require('../configMysql');

module.exports = {

    /*OBTENER MARCAS EN LA PAGINA DE PRODUCTOS*/
    getBrands: (callback) => {
        let sql = 'SELECT *  FROM Brand'
        database.query(sql,(err,data) => {
            if (err) throw err
            if (data != null){
                callback(data[0])
            }else{
                callback(null)
            }
        })
    }
}