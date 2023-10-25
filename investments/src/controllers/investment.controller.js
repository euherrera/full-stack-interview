const R = require("ramda")
class InvestmentController {
    constructor(investmentService) {
      this.investmentService = investmentService;
    }
  
    async getInvestments(req, res) {
      try {
        const investments = await this.investmentService.getInvestments();
        return res.status(200).send(investments);
      }catch(error) {
        // console.log(error)
        return res.status(500).send(error);
      }
      
    }

    async getInvestment(req, res) {
      try {
        const { id } = req.params;
        console.log(id)
        const investments = await this.investmentService.getInvestment(id);
        const investment = R.filter(R.propEq("id", id), investments)
        return res.status(200).send(investment)
      }catch(error){
        // console.log(error)
        return res.status(500).send(error);
      }
      
    }

    async postInvestment(req, res) {
      try {
        const investment = await this.investmentService.postInvestment(req);
        return res.status(200).send(investment);
      }catch(error){
        // console.log(error)
        return res.status(500).send(error);
      }
      
    }
  }
  
  module.exports = InvestmentController;