const orderDAO = require('../models/ordersDao')

const addOrder = (req, res) => {

    const order = {
        product_id: req.body.product_id,
        customer_id: req.body.customer_id,
        amount: req.body.amount,
        subtotal: req.body.subtotal,
        status: req.body.status,
        date: req.body.date,
        address_id: req.body.address_id
    }

    orderDAO.insertOrder(order, (data) => {
        if(data.affectedRows === 1){
            res.send({
                status: true,
                message: 'order inserted'
            })
        }
    })
}

const getOrderByCusID = (req, res) => {
    orderDAO.getOrderByCustomerID(req.params.customerID, (data) => {
        if (data != null) {
            res.send({
                status: true,
                data: data
            })
        }else{
            res.send({
                status: false,
                message: 'data not find'
            })
        }
    })
}

const getCartPasToOrder = (req, res) => {
   orderDAO.getCartOrder(req.params.customerID, (data) =>{
       if (data != null) {
           res.send({
               status: true,
               data: data
           })
       }else {
           res.send({
               status: false,
               message: 'data not find'
           })
       }
   })
}

module.exports = {
    addOrder,
    getOrderByCusID,
    getCartPasToOrder
}