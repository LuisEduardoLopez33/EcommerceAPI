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

const insertCategory = (req, res) => {
    let category = {
        //id: req.body.id,
        name: req.body.name
    }

    categoryDAO.insertCategory(category,(data)=>{
        res.send({
            status: true,
            message: 'Se ha agregado la categoria'
        });
    }, err => {
        res.send({
            status: false,
            message: 'Error al agregado la categoria ' + err
        });
    })
}

const updateCategory = (req, res) => {

    let category = {
        id: req.params.id,
        name: req.body.name
    }

    categoryDAO.updateCategory(category,(data)=>{
        res.send({
            status: true,
            message: 'Se ha actualizado los datos de la categoria: ' +'id: ' + category.id +', name: ' + category.name
        });

    }, err =>{
        res.send({
            status: false,
            message: 'Error al actualizar los datos de la categoria: ' + err
        });
    })

}

const deleteCategory = (req, res) => {

    categoryDAO.deleteCategory(req.params.id,(data) =>{
        res.send({
            status: true,
            message: 'Se ha eliminado la categoria con el id: ' + req.params.id
        });
    }, err =>{
        res.send({
            status: false,
            message: 'Error al eliminar la categoria ' + err
        });
    })
}

module.exports = {
    getAllCategories,
    consultCategories,
    insertCategory,
    updateCategory,
    deleteCategory
}