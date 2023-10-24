const R = require("ramda")
class InvestmentController {
    constructor(investmentService) {
      this.investmentService = investmentService;
    }
  
    async getInvestments(req, res) {
      const investments = await this.investmentService.getInvestments();
      return res.status(200).send(investments);
    }

    async getInvestment(req, res) {
      const { id } = req.params;
      
      console.log(id)
      const investments = await this.investmentService.getInvestment(id);
      const investment = R.filter(R.propEq("id", id), investments)
      return res.send(investment)
    }

    async postInvestment(req, res) {
      const investment = await this.investmentService.postInvestment(req);
      return res.status(200).send(investment);
    }
  }
  
  module.exports = InvestmentController;