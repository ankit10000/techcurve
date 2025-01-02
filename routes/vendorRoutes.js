const express = require('express');
const router = express.Router();
const { getvenderuser } = require('../controllers/vendorController');

router.get('/getVendorUsers', getvenderuser);

module.exports = router;
