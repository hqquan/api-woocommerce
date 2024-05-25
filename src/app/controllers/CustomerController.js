const api = require('../../config/api');

class CustomerController {
	// [GET] /customer
	show(req, res, next) {
		api.get('customers').then((resApi) => {
			res.render('customer/show', { customers: resApi.data });
		});
	}

	// [GET] /customer/create
	create(req, res, next) {
		res.render('customer/create');
	}

	// [POST] /customer/store
	store(req, res, next) {
		api
			.post('customers', req.body)
			.then((resApi) => {
				res.redirect('/customer');
			})
			.catch((error) => {
				res.render('error', { message: error.response.data.message });
			});
	}

	// [GET] /customer/:id/edit
	edit(req, res, next) {
		const customerId = req.params.id;

		api.get(`customers/${customerId}`).then((resApi) => {
			res.render('customer/edit', { customer: resApi.data });
		});
	}

	// [PUT] /customer/:id
	update(req, res, next) {
		const customerId = req.params.id;

		api.put(`customers/${customerId}`, req.body).then((resApi) => {
			res.redirect('/customer');
		});
	}

	// [DELETE] /customer/:id
	destroy(req, res, next) {
		const customerId = req.params.id;

		api.delete(`customers/${customerId}`, { force: true }).then((resApi) => {
			res.redirect('/customer');
		});
	}
}

module.exports = new CustomerController();
