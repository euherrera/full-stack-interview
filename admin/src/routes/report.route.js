const express = require('express');
const { reportService } = require('../services');
const { ReportController } = require('../controllers');
const reportController = new ReportController(reportService);


const router = express.Router();
router.post('/investments/export', reportController.postInvestments.bind(reportController));
module.exports = router;