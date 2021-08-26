const database = require('../configMysql');

module.exports = {
    /*QUERY PARA OBTENER TODAS LAS CATEGORIAS */
    getAllCategories: (callback) => {
        let sql = 'SELECT * FROM Category';
        database.query(sql,(err,data) => {
            if(err) throw err;
            if(data != null){
                callback(data);
            }else{
                callback(null);
            }
        })
    },

    getCategoryById:(id, callback)=>{
        let sql = 'SELECT * FROM Category WHERE Category.id = ?';
        database.query(sql,id,(err, data)=>{
            if(err) throw err;
            if(data != null) {
                return callback(data);
            }else{
                callback(null);
            }
        })
    },

    insertCategory: () => {},
    updateCategory: () => {},
    deleteCategory: () => {}
}