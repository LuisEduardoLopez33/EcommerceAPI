const customerDao = require('../models/customerDao');
const bcrypt = require('bcrypt');
const token = require('../models/createToken');
const jwt = require('../utils/GenerateJWT')

const validateCustomer = (req, res) =>{
    customerDao.searchCustomer(req.params.mail, (data) =>{
        
            if (data != null) {
                res.send({
                status: false,
                message: 'Este usuario ya existe'
            })
            } else {
                res.send({
                    status: true,
                    message: 'usuario disponible'
                })
            }
            
    })
}

const singUp = (req, res) =>{
    const customer = {
        name: req.body.name,
        last_name: req.body.last_name,
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
    let password = req.body.password
        customerDao.searchCustomer(mail, (data) =>{
        if (data) {
            if (bcrypt.compareSync(password, data.password)){
                res.send({
                    status: true,
                    message: 'los parametros son correctos',
                    token: jwt.generateToken(data),
                    name: data.name,
                    last_name: data.last_name,
                    id: data.id
                })
            } else {
                res.send({
                    status: false,
                    message: 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message: 'La cuenta de usuario no existe'
            })
        }
    })
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