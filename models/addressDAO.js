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
    getAddressPerCustomerById: (callback) => {
        let sql = 'SELECT Address.id, Address.description, Address.customer_id, Address.city_id, Address.reference, Address.post_code, City.id, City.name, State.id, State.name FROM Customer LEFT JOIN Address ON Customer.id = Address.customer_id LEFT JOIN City ON Address.city_id = City.id LEFT JOIN State ON City.state_id = State.id WHERE Customer.id = 5';

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

    updateAddress:(callback) => {},
    deletAddress:(callback) => {}

}