class CompanyController {
    constructor(companyService) {
      this.companyService = companyService;
    }
  
    async getCompanies(req, res) {
      try{
        const companies = await this.companyService.getCompanies();
        return res.status(200).send(companies);
      }catch(error){
        // console.log(error)
        return res.status(500).send(error);
      }
      
    }

    async getCompany(req, res) {
      try{
        const {id: requestedId} = req.params
        const companies = await this.companyService.getCompany(requestedId);
        const company = companies.find(({id}) => id === requestedId)
        res.send(company)
      }catch(error){
        return res.status(500).send(error);
      }
      
    }

  }
  
  module.exports = CompanyController;