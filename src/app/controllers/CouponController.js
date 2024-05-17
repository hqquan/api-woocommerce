const api = require('../../config/api');

class CouponController {
	// [GET] /coupon
	show(req, res, next) {
		api.get('coupons').then((resApi) => {
			res.render('coupon/show', { coupons: resApi.data });
		});
	}

	// [GET] /coupon/create
	create(req, res, next) {
		res.render('coupon/create');
	}

	// [POST] /coupon/store
	store(req, res, next) {
		api
			.post('coupons', req.body)
			.then((resApi) => {
				res.redirect('/coupon');
			})
			.catch((error) => {
				res.render('error', { message: error.response.data.message });
			});
	}

	// [GET] /coupon/:id/edit
	edit(req, res, next) {
		const couponId = req.params.id;
		api.get(`coupons/${couponId}`).then((resApi) => {
			res.render('coupon/edit', {
				coupon: resApi.data,
			});
		});
	}

	// [PUT] /coupon/:id
	update(req, res, next) {
		const couponId = req.params.id;
		let couponData;
		if (req.body.free_shipping) {
			couponData = req.body;
		} else {
			couponData = {
				...req.body,
				free_shipping: false,
			};
		}
		api.put(`coupons/${couponId}`, couponData).then((resApi) => {
			res.redirect('/coupon');
		});
	}

	// [DELETE] /coupon/:id
	destroy(req, res, next) {
		const couponId = req.params.id;
		api
			.delete(`coupons/${couponId}`, { force: true })
			.then((resApi) => {
				res.redirect('/coupon');
			})
			.catch((error) => {
				res.render('error', { message: error.response.data.message });
			});
	}
}

module.exports = new CouponController();
