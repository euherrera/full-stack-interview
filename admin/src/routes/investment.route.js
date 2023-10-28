const express = require('express');
const { investmentService } = require('../services');
const { InvestmentController } = require('../controllers');
const investmentController = new InvestmentController(investmentService);
const routing = require('../middleware/routing-name')
const route = require('../middleware/routing-csv')
const router = express.Router();

router.get('/investments/:id', routing, route, investmentController.getInvestments.bind(investmentController));
router.post('/investments/export',  reportController.postInvestments.bind(reportController));

module.exports = router;