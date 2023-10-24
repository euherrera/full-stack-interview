const generateRes = require('../helpers/response-generator');
const InvestmentController = require('../../../src/controllers/investment.controller');
const investmentService= require('../../../src/services/investment.service');


jest.mock('../../../src/services/investment.service');


describe('InvestmentController tests', () => {
  const investmentController = new InvestmentController(investmentService);

  test('should have class methods', () => {
    expect(investmentController).toHaveProperty('getInvestments');
  });

  test('should get investments', async () => {
    const res = generateRes();
    const req = {};
    await investmentController.getInvestments(req, res);
    expect(investmentService.getInvestments).toHaveBeenCalled();
  });
});