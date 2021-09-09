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
                message: 'Address is empty'
            });
        }
    })
}

const consultAddressPerCustomer = (req, res) => {
    addressDAO.getAddressPerCustomerById(req.params.idCustomer, (data)=>{
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

const updateAddress = (req, res) => {
 
    let address = {
        id: req.params.idAddress,
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

    addressDAO.updateAddress(address, (data) => {
        res.send({
            status: true,
            message: 'Se actualizado con exito los datos de la direccion'
        });
    }, err => {
        res.send({
            status: false,
            message: 'Error al actualizar los datos de la direccion ' + err
        });
    })
}

const deleteAddress = (req, res) => {
    addressDAO.deletAddress(req.params.idAddress,(data) => {
        res.send({
            status: true,
            message: 'Se ha eliminado con exito la dirección con el id: ' + req.params.idAddress
        });
    }, err => {
        res.send({
            status: true,
            message: 'Error al eliminar los datos de la direccion: ' + err
        });
    })
}


module.exports = {
    getAllAddresses,
    consultAddressPerCustomer,
    addNewAddress,
    updateAddress,
    deleteAddress
}