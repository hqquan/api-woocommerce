const express = require('express');
const router = express.Router();

const couponController = require('../app/controllers/CouponController');

router.get('/create', couponController.create);
router.post('/store', couponController.store);
router.get('/:id/edit', couponController.edit);
router.put('/:id', couponController.update);
router.delete('/:id', couponController.destroy);
router.get('/', couponController.show);

module.exports = router;
