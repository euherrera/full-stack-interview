
class CompanyController {
    constructor(companyService) {
      this.companyService = companyService;
    }

    async getCompanies(req, res) {
        const { id } = req.params;
        const companies = await this.companyService.getCompanies(id, res);
        return res.status(200).send(companies);
        
    }

  }
  
  module.exports = CompanyController;
