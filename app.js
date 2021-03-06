var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//Routes
var customerRouter = require('./routes/customers');
var productsRouter = require('./routes/products');
var cartRouter = require('./routes/cart');
var ordersRouter = require('./routes/orders');
var indexRouter = require('./routes/index');
var categoryRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
var addressRouter = require('./routes/address');
var productRev = require('./routes/productReview');
var imageRouter = require('./routes/image');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'dbimages')))
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//URLs
app.use('/',  indexRouter);
app.use('/customers', customerRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);
app.use('/category', categoryRouter);
app.use('/brand', brandRouter);
app.use('/address', addressRouter);
app.use('/productReview', productRev);
app.use('/image', imageRouter);

//
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;