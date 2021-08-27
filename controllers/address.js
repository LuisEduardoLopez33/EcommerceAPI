const addressDAO = require('../models/addressDAO');

const getAllAddresses = (req, res) => {
    addressDAO.getAllAddresses((data) => {

        if(data != null) {
            res.send({
                status: true,
                data: data
            });
        }else{
            res.send({
                status: false,
                message: 'Address empty'
            });
        }
    })
}

const consultAddressPerCustomer = (req, res) => {
    addressDAO.getAddressPerCustomerById((data)=>{
        if(data != null) {
            res.send({
                status: true,
                message: 'Dato Obtenido',
                data: data
            });
        }else{
            res.send({
                status: false,
                message: 'No se encontro el dato'
            });
        }
    })
}

const addNewAddress = (req, res) => {

    let address = {
        description: req.body.description,
        customer_id: req.body.customer_id,
        city_id: req.body.city_id,
        reference: req.body.reference,
        post_code: req.body.post_code,
        int_num: req.body.int_num,
        out_num: req.body.out_num,
        name: req.body.name,
        last_name: req.body.last_name,
        phone: req.body.phone
    }

    addressDAO.insertAddress(address,(data) => {

        res.send({
            status: true,
            message: 'Se ha insertado correctamente la direccion'
        })

    }, err => {
        res.send({
            status: false,
            message: 'Error al insertar el producto' + err
        });
    })
}

const updateAddress = (req, res) => {}
const deleteAddress = (req, res) => {}


module.exports = {
    getAllAddresses,
    consultAddressPerCustomer,
    addNewAddress,
    updateAddress,
    deleteAddress
}