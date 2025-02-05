const express = require('express');
const { defaultController, getAddressBalance } = require('../controllers/Faucet.controller');

const router = express.Router();

router.get('/', defaultController);

router.get('/balance', getAddressBalance);

module.exports = router;