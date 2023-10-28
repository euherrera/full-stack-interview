
class InvestmentController {
    constructor(investmentService) {
      this.investmentService = investmentService;
    }

    async getInvestments(req, res, next) {
        const { id } = req.params;
        const investments = await this.investmentService.getInvestments(id, res, req, next);
       
        return res.status(200).send(investments);
      
    }

    

    async postInvestments(req, res) {
     
      const investments = await this.investmentService.postInvestments(req);
      return res.status(200).send(investments);
    }

    
  }
  
  module.exports = InvestmentController;