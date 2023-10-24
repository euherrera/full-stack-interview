const data = require('../data.json');

//console.log(data);
class CompanyService {

  constructor() {
    this.data = data;
  }

  async getCompanies() {
  
    
    const companies = await this.data;
    return companies;
  }

  async getCompany() {
   
   
    const companies = await this.data;
    return companies;
  }

}

const companyService = new CompanyService();
module.exports = companyService;