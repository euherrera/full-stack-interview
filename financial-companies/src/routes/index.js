const companyRouter = require('./company.route');

module.exports = () => {
  const router = express.Router();
  router.use('/companies', companyRouter);
  return router;
};