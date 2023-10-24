const investmentService = require('../../../src/services/investment.service');



describe('LoggerService tests', () => {
  

  test('should have class methods', () => {
    expect(investmentService).toHaveProperty('getInvestments');
  });

  test('should have class methods', () => {
    expect(investmentService).toHaveProperty('getInvestment');
  });

  test('should have class methods', () => {
    expect(investmentService).toHaveProperty('postInvestment');
  });


//   test('should log', async () => {
//     loggerService.logger.log = jest.fn(() => 'level: error message');
//     const all = await loggerService.log('level', 'error message', {});
//     expect(all).toStrictEqual('level: error message');
//   });

 
});