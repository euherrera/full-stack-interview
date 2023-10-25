const express = require('express');
const { companyService } = require('../services');
const { investmentService } = require('../services');
const { CompanyController } = require('../controllers');
const companyController = new CompanyController(companyService);

const router = express.Router();
router.get('/companies/:id', companyController.getCompanies.bind(companyController));


module.exports = router;