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

    addBrand: (brand, callback) => {
        let sql = 'INSERT INTO Brand SET ?';
        database.query(sql, brand, (err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    },

    
    updateBrand:(brand, callback) => {
        let sql = 'UPDATE brand SET name = ? WHERE id = ?';
        database.query(sql, [brand.name, brand.id], (err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    },

    deleteBrand: (id, callback) => {
        let sql = 'DELETE FROM brand WHERE id = ?';
        database.query(sql, id, (err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    }
    
}