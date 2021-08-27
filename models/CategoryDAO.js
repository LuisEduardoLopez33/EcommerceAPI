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

        database.query(sql, id, (err, data)=>{
            if(err) throw err;
            if(data != null) {
                return callback(data);
            }else{
                callback(null);
            }
        })
    },

    insertCategory: (category, callback) => {
        let sql = 'INSERT INTO Category SET ?';

        database.query(sql, category, (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    },

    updateCategory: (category, callback) => {
        let sql = 'UPDATE Category SET name = ? WHERE id = ?';

        database.query(sql, [category.name, category.id], (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    },

    deleteCategory: (id, callback) => {
        let sql = 'DELETE FROM Category WHERE id = ?';

        database.query(sql,id,(err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    }

}