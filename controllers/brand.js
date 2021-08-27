const brandDAO = require('../models/brandDAO');


const getAllBrands = (req, res) => {
    brandDAO.getAllBrands ((data) => {

        if(data != null) {
            res.send({
                status:true,
                data: data
            });
        }else{
            res.send({
                status: false,
                message: 'Marca Vacia'
            });
        }
    })
}

const consultBrandById = (req, res) => {
    brandDAO.getBrandById(req.params.id, (data) =>{
        if(data != null) {
            res.send({
                status: true,
                message: 'Marca Obtenida',
                data: data
            });
            
        }else{
            res.send({
                status: false,
                message: 'No se encuetra la marca'
            });
        }
    })
}

const insertBrand = (req, res) => {

    let brand = {
        id: req.body.id,
        name: req.body.name
    }

    brandDAO.addBrand(brand, (data)=>{
        res.send({
            status: true,
            message: 'Se ha insertado correctamente a la BD'
        });
    }, err =>{
        res.send({
            status: false,
            message: 'Error al insertar datos' + err
        });
    })
}

const updateBrand = (req, res) => {
    let brand = {
        id: req.params.id,
        name: req.body.name
    }

    brandDAO.updateBrand(brand,(data)=>{
        res.send({
            status: true,
            message: 'Se ha actualizado los datos de la marca: ' +'id: ' + brand.id +', name: ' + brand.name
        });
    }, err =>{
        res.send({
            status: false,
            message: 'Error al actualizar los datos de la marca: ' + err
        });
    })
}

const deleteBrand = (req, res) => {
    brandDAO.deleteBrand(req.params.id,(data) => {
        res.send({
            status: true,
            message: 'Se ha eliminado la marca'
        });

    }, err => {
        res.send({
            status: false,
            message: 'Eror al eliminar la marca' + err
        });
    })
}

module.exports = {
    getAllBrands,
    consultBrandById,
    insertBrand,
    updateBrand,
    deleteBrand
}