const express = require('express');
const { companyService } = require('../services');
const { CompanyController } = require('../controllers');
const companyController = new CompanyController(companyService);

const router = express.Router();
router.get('/companies', companyController.getCompanies.bind(companyController));
router.get('/companies/:id', companyController.getCompany.bind(companyController));


module.exports = router;