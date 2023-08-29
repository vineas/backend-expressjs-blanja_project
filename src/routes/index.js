const express = require("express");
const router = express.Router();
const productRouter = require('../routes/products')
const categoryRouter = require('../routes/category')
const customerRouter = require('../routes/customer')
const sellerRouter = require('../routes/seller')
const ordersRouter = require('../routes/orders')
const usersRouter = require('../routes/users')

router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/customer', customerRouter);
router.use('/seller', sellerRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);

module.exports = router;