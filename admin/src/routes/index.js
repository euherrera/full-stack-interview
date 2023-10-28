const express = require('express');

const investmentRouter = require('./investment.route');
const companyRouter = require('./company.route');


module.exports = () => {
  const router = express.Router();
  router.use('/companies', companyRouter);
  router.use('/investments', investmentRouter);
  router.use('/investments/export', investmentRouter);

  return router;
};