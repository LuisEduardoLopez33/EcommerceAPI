const database = require('../configMysql');

module.exports = {
    /*OBTENER TODAS LAS MARCAS DEL PRODUCTO*/
    getAllBrands: (callback) => {
        let sql = 'SELECT * FROM Brand';

        database.query(sql,(err,data) => {
            if(err) throw err;
            if(data != null){
                //callback(data[0])
                callback(data);
            }else{
                callback(null);
            }
        })
    },


    getBrandById: (id, callback) => {
        let sql = 'SELECT * FROM Brand WHERE Brand.id = ?';
        database.query(sql, id, (err, data) => {
            if(err) throw err;

            if(data != null){
                return callback(data);
            }else{
                return callback(null);
            }
        })
    },

    addBrand: (callback) => {},
    updateBrand:(callback) => {},
    deleteBrand: (callback) => {}
}