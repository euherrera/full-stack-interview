const request = require("request");
const axios = require('axios');


const config = require("config")
class InvestmentService  {
  
  async getInvestments(id, res, req) {
         try {
          console.log('inside', req.csv)
          return  req.csv;
         }catch(error){
          console.error('error:', error);
          return error.toString();
         }
   
  }


}

const investmentService = new InvestmentService();
module.exports = investmentService;