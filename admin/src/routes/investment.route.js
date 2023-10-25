const express = require('express');
const { investmentService } = require('../services');
const { InvestmentController } = require('../controllers');
const investmentController = new InvestmentController(investmentService);
const routing = require('../middleware/routing')

const router = express.Router();

router.get('/investments/:id', routing, investmentController.getInvestments.bind(investmentController));
router.post('/investments/export', investmentController.postInvestments.bind(investmentController));
module.exports = router;