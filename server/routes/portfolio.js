const express = require('express');
const router = express.Router();

const auth = require('../services/auth-service');

const PortfolioCtrl = require('../controllers/portfolio');

router.get('', PortfolioCtrl.getPortfolios);

router.post('', auth.checkJwt, PortfolioCtrl.createPortfolio);

router.get('/secret', auth.checkJwt, PortfolioCtrl.getSecret);

module.exports = router;

