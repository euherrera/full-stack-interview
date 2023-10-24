class CompanyController {
    constructor(companyService) {
      this.companyService = companyService;
    }
  
    async getCompanies(req, res) {
      const companies = await this.companyService.getCompanies();
      return res.status(200).send(companies);
    }

    async getCompany(req, res) {
      const {id: requestedId} = req.params
      const companies = await this.companyService.getCompany(requestedId);
      const company = companies.find(({id}) => id === requestedId)
       res.send(company)
    }

  }
  
  module.exports = CompanyController;