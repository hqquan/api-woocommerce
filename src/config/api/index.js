require('dotenv').config();

const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
	url: process.env.siteURL,
	consumerKey: process.env.consumerKey,
	consumerSecret: process.env.consumerSecret,
	version: 'wc/v3',
});

module.exports = api;
