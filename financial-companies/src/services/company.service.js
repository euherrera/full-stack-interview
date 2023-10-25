const data = require('../data.json');

//console.log(data);
class CompanyService {

  constructor() {
    this.data = data;
  }

  async getCompanies() {
  
    try {
      const companies = await this.data;
      return companies;
    }catch(error) {
      console.log(error)
    }
    
  }

  async getCompany() {
   
    try {
      const companies = await this.data;
      return companies;
    }catch(error) {
      console.log(error)
    }
    
  }

}

const companyService = new CompanyService();
module.exports = companyService;