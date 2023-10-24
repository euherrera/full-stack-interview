const request = require("request");
const config = require("config")
const axios = require('axios');

  class CompanyService {
   

  async getCompanies(id, res) {
    const request =  axios
    .get(`${config.companiesServiceUrl}/companies/${id}`)
    .then((response) => {
      return response.data.name;
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });
    
    return request;
}


}

const companyService = new CompanyService();
module.exports = companyService;


