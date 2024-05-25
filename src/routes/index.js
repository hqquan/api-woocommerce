const productRouter = require('./product');
const couponRouter = require('./coupon');
const customerRouter = require('./customer');
const homeRouter = require('./home');

function route(app) {
	app.use('/product', productRouter);
	app.use('/coupon', couponRouter);
	app.use('/customer', customerRouter);
	app.use('/', homeRouter);
}

module.exports = route;
