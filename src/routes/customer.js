const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

router.get('/create', customerController.create);
router.post('/store', customerController.store);
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.destroy);
router.get('/', customerController.show);

module.exports = router;
