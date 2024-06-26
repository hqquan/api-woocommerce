const api = require('../../config/api');

class ProductController {
	// [GET] /product/:page&:per_page
	show(req, res, next) {
		// let per_page = 10;
		// let page = req.params.page || 1;
		// ?page=${page}&per_page=${per_page}
		api.get(`products`).then((resApi) => {
			res.render('product/show', {
				products: resApi.data,
			});
		});
	}

	// [GET] /product/create
	create(req, res, next) {
		api.get('products/categories').then((resApi) => {
			res.render('product/create', { categories: resApi.data });
		});
	}

	// [POST] /product/store
	store(req, res, next) {
		const productData = {
			name: req.body.name,
			regular_price: req.body.price,
			description: req.body.description,
			images: [
				{
					src: req.body.imgSrc,
					name: req.body.name,
					alt: req.body.name,
				},
			],
			categories: [
				{
					id: req.body.category,
				},
			],
		};

		api
			.post('products', productData)
			.then((resApi) => {
				res.redirect('/product');
			})
			.catch((error) => {
				res.render('error', { message: error.response.data.message });
			});
	}

	// [GET] /product/:id/edit
	edit(req, res, next) {
		const productId = req.params.id;

		Promise.all([
			api.get('products/categories'),
			api.get(`products/${productId}`),
		]).then(([resCategory, resProduct]) => {
			res.render('product/edit', {
				product: resProduct.data,
				categories: resCategory.data,
			});
		});
	}

	// [PUT] /product/:id
	update(req, res, next) {
		const productId = req.params.id;
		const productData = {
			name: req.body.name,
			regular_price: req.body.price,
			description: req.body.description,
			images: [
				{
					src: req.body.imgSrc,
					name: req.body.name,
					alt: req.body.name,
				},
			],
			categories: [
				{
					id: req.body.category,
				},
			],
		};

		api.put(`products/${productId}`, productData).then((resApi) => {
			res.redirect('/product');
		});
	}

	// [DELETE] /product/:id
	destroy(req, res, next) {
		const productId = req.params.id;

		api.delete(`products/${productId}`).then((resApi) => {
			res.redirect('/product');
		});
	}
}

module.exports = new ProductController();
