const customerDao = require('../models/customerDao');
const bcrypt = require('bcrypt');
const token = require('../models/createToken');
const {compareSync} = require("bcrypt");

const validateCustomer = (req, res) =>{
    customerDao.searchCustomer(req.params.mail, (data) =>{
        try {
            if (!data) throw new Err('Este Usuario ya Existe')
            res.send({
                status: true,
                message: 'Aceptable'
            })
        }catch (Err) {
            res.send({
                status: false,
                message: 'Este Usuario ya Existe'
            })

        }
    })
}

const singUp = (req, res) =>{
    const customer = {
        name: req.body.name,
        last_name: req.body.lastname,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        mail: req.body.mail,
        date_of_bd: req.body.date_of_bd
    }

    customerDao.insertCustomer(customer, (data) =>{
        res.send({
            status: true,
            message: 'Cuenta Creada Exitosamente'
        })
    }, err =>{
        res.send({
            status: false,
            message: 'No se pudo crear la Cuenta',
            errorMessage: err
        })
    })
}

const logIn = (req, res) =>{
    let mail = req.body.mail
    customerDao.searchCustomer(mail, (data) =>{
        let password = bcrypt.compareSync(req.body.password, data.password, 10)
        if (data){
            if (password){
                res.send({
                    status: true,
                    message: 'contraseña Correcta'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Contraseña Incorrecta'
                })
            }
        }else {
            res.send({
                status: false,
                message: 'La cuenta no Existe'
            })
        }
    })

    return token;
}

const getAllCust = (req, res) => {
    customerDao.getAllCustomers( (data) => {
        if(data != null) {
            res.send({
                status: true,
                data: data,
                message: 'informacion de clientes obtenida'
            });
        }else{
            res.send({
                status: false,
                message: 'No se encontró informacion de clientes'
            });
        }
    })
}






module.exports = {
    validateCustomer,
    singUp,
    logIn,
    getAllCust
}