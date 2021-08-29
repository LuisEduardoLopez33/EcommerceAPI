const cartDAO = require('../models/cartDao')

const addCart = (req, res) => {
    const cart = {
        product_id: req.body.product_id,
        customer_id: req.body.customer_id,
        amount: req.body.amount,
        subtotal: req.body.subtotal
    }
    cartDAO.insertCart(cart, (data) => {
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'se agrego'
            })
        }
        else{
            res.send({
                status: false,
                message: 'Ha ocurrido un error'
            })
        }
    })
}

const GetCartByCusID = (req, res) => {
    cartDAO.getCartByCustomerID(req.params.customerID, (data) => {
        if (data != null) {
            res.send({
                status: true,
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Catálogo vacío'
            })
        }
    })
}

/*DELETE CON EL ID DEL CARRITO*/
const delByCartID = (req, res) => {
    cartDAO.deleteByCartID(req.params.cartID, (data) => {
        res.send({
            status: true,
            message: 'cart deleted'
        });
    }, err => {
        res.send({
            status:false,
            message: 'delete faliled'
        })
    })
}

/*DELETE CON EL ID DEL CLIENTE*/
const delByCustomerID = (req, res) => {
    cartDAO.deleteByCustomerID(req.params.customerID, (data) => {
        res.send({
            status: true,
            message: 'cart deleted'
        });
    }, err => {
        res.send({
            status:false,
            message: 'delete failed'
        })
    })
}

const updCartByCartID = (req, res) => {

    const cart = {
        id: req.params.id,
        product_id: req.body.product_id,
        customer_id: req.body.customer_id,
        amount: req.body.amount,
        subtotal: req.body.subtotal
    }

    cartDAO.updateCartByCartID(cart, (data) => {
        res.send({
            status: true,
            message: 'updated successfully'
        });
    }, err => {
        res.send({
            status: false,
            message: 'update failed'
        });
    })
}

module.exports = {
    addCart,
    GetCartByCusID,
    delByCartID,
    delByCustomerID,
    updCartByCartID
}