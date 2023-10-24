const express = require('express');

const investmentRouter = require('./investment.route');

module.exports = () => {
  const router = express.Router();
  router.use('/investments', investmentRouter);
  return router;
};