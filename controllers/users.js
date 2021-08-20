const userDAO = require('../models/usersDao');
const bcrypt = require('bcrypt');
const token = require('../models/createToken');

const validateUser = (req, res) =>{
    userDAO.searchUser(req.param.nameUser, (data) =>{
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
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        user: req.body.user,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    userDAO.insertUser(user, (data) =>{
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
    let userName = req.body.username
    let password = req.body.password

    userDAO.searchUser(userName, (data) =>{
        if (data){
            if (password){
                res.send({
                    status: true
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





module.exports = {
    validateUser,
    singUp,
    logIn
}