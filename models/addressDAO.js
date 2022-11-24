const database = require('../configMysql');

module.exports = {

    getAllAddresses: (callback) => {
        let sql = 'SELECT * FROM address';

        database.query(sql, (err, data) => {

            if(err) throw err;
            if(data != null){
                return callback(data);
            }else{
                return callback(null);
            }
        })
    },

    /*OBTENER TODAS LAS DIRECCIONES QUE HA REGISTRADO CADA CLIENTE*/
    getAddressPerCustomerById: (id, callback) => {
        let sql = 'SELECT Address.id AS id_ad, Address.description, Address.customer_id, Customer.name, Address.city_id, Address.reference, Address.post_code, City.id, City.name, State.id, State.name FROM Customer LEFT JOIN Address ON Customer.id = Address.customer_id LEFT JOIN City ON Address.city_id = City.id LEFT JOIN State ON City.state_id = State.id WHERE Customer.id = ?';

        database.query(sql, id, (err, data) => {
            
            if(err) throw err;
            if(data != null){
                return callback(data);
            }else{
                return callback(null);
            }
        })
    },

    /*INGRESAR UNA NUEVA DIRECCION */
    insertAddress: (address, callback) => {
        //let sql = "INSERT INTO Address (description, customer_id, city_id, reference, post_code, int_num, out_num, name, last_name, phone) VALUES ('16 TestCity. Av', 5, 22, 'Una referencia mas', '00000', '11112', '11112', 'Otra Persona','Otro apellido','521346987')";
        let sql = 'INSERT INTO Address SET ?'
        database.query(sql, address, (err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    },

    updateAddress:(address, callback) => {
        let sql = 'UPDATE Address SET description = ?, customer_id = ?, city_id = ?, reference = ?, post_code = ?, int_num = ?, out_num = ?, name = ?, last_name = ?, phone = ? WHERE id = ?';

        database.query(sql,[address.description, address.customer_id, address.city_id, address.reference, address.post_code, address.int_num, address.out_num, address.name, address.last_name, address.phone, address.id], (err, data) => {
            if(err) throw err;
            return callback(data);
        })
    },


    deletAddress:(id, callback) => {
        let sql = 'DELETE FROM Address WHERE id = ?';
        
        database.query(sql,id, (err, data) => {
            if(err) throw err;
            return callback(data);
        });
    },



    getJoinStateWithCity:(state, callback) => {

        let sql = 'SELECT state.id AS id_State, city.id AS id_City, city.name AS name_City FROM state JOIN city ON state.name = ? AND state.id = city.state_id';

        database.query(sql,[state.name], (err, data) => {
            console.log(sql)
            if(err) throw err;

            if(data != null){
                return callback(data);
            }else{
                return callback(null);
            }

        })
    }
}