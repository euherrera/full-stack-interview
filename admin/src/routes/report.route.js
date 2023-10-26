const express = require('express');
const { reportService } = require('../services');
const { ReportController } = require('../controllers');
const reportController = new ReportController(reportService);
const routing = require('../middleware/routing-csv')

const router = express.Router();
router.post('/investments/export', routing,  reportController.postInvestments.bind(reportController));
module.exports = router;