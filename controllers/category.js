const categoryDAO = require('../models/categoryDAO')

const getAllCategories = (req, res) => {

    categoryDAO.getAllCategories((data) => {

        if(data != null){

            res.send({
                status: true,
                data: data
            });

        }else{

            res.send({
                status: false,
                message: 'Categoria Vacia'
            });

        }
    })
}


const consultCategories = (req, res) => {

    categoryDAO.getCategoryById(req.params.idCategory, data => {

        if(data != null){

            res.send({
                status: true,
                message: 'Dato Obtenido',
                data: data
            });

        }else{

            res.send({
                status: false,
                message: 'No se encontro los datos'
            });

        }

    })
}

const insertCategory = (req, res) => {}

const updateCategory = (req, res) => {}

const deleteCategory = (req, res) => {}

module.exports = {
    getAllCategories,
    consultCategories,
    //
    insertCategory,
    updateCategory,
    deleteCategory
}