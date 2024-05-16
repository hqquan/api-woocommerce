const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
	url: 'https://kneelife.id.vn/',
	consumerKey: 'ck_2b8dbd8941b87aa657f0e28cb2da432f87b455b5',
	consumerSecret: 'cs_291faa3bcdefc4c81c778d289ae0be326b651a16',
	version: 'wc/v3',
});

module.exports = api;
