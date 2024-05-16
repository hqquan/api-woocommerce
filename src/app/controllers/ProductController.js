const api = require('../../config/api');

class ProductController {
	// [GET] /product
	show(req, res, next) {
		api.get('products').then((resApi) => {
			res.render('product/show', { products: resApi.data });
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

		api.get(`products/${productId}`).then((resApi) => {
			res.render('product/edit', { product: resApi.data });
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
