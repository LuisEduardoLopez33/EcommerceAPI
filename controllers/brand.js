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

const insertBrand = (req, res) => {}

const updateBrand = (req, res) => {}

const deleteBrand = (req, res) => {}

module.exports = {
    getAllBrands,
    consultBrandById,
    insertBrand,
    updateBrand,
    deleteBrand
}