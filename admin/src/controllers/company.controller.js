
class CompanyController {
    constructor(investmentService) {
      this.investmentService = investmentService;
    }

    async getCompanies(req, res) {
        const { id } = req.params;
        const companies = await this.investmentService.getCompanies(id, res);
        return res.status(200).send(companies);
        
    }

  }
  
  module.exports = CompanyController;
