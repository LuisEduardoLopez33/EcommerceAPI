const prodRevDAO = require('../models/productReviewDAO')

const addNewReview = (req, res) => {
    const Review = {
        product_id: req.body.product_id,
        customer_email: req.body.customer_email,
        title: req.body.title,
        comment: req.body.comment,
        review_date: req.body.review_date
    }

    prodRevDAO.addReview(Review, (data) => {
        res.send({
            status: true,
            message: 'review agregada'
        })
    }, err =>{
        res.send({
            status: false,
            message: 'error al agregar la review'
        })
    })
}

const getReviews = (req, res) => {
    prodRevDAO.getProductReview(req.params.productID, (data) => {
        if (data != null) {
            res.send({
                status: true,
                data: data,
                message: 'reviews obtenidas'
            })
        } else {
            res.send({
                status: false,
                message: 'error'
            })
        }
    })
}

module.exports = {
    addNewReview,
    getReviews
}