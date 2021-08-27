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

module.exports = {
    addCart,
    GetCartByCusID
}