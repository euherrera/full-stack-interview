const request = require("request");
const axios = require('axios');
const fs = require("fs"); 
const output = './output.json';

const config = require("config")
class InvestmentService  {
  
  async getInvestments(id, res, req) {
    const request = await axios
    .get(`${config.investmentsServiceUrl}/investments/${req.params.id}`)
    .then((response) => {
      console.log('passed middleware:', req.csv);
      return response.data;
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });
   return request
  }


}

const investmentService = new InvestmentService();
module.exports = investmentService;