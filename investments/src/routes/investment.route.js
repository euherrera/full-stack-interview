const express = require('express');
const { investmentService } = require('../services');
const { InvestmentController } = require('../controllers');
const investmentController = new InvestmentController(investmentService);

const router = express.Router();
router.get('/investments', investmentController.getInvestments.bind(investmentController));
router.get('/investments/:id', investmentController.getInvestment.bind(investmentController));
//router.post('/investments/export',  investmentController.postInvestments.bind(investmentController));

module.exports = router;