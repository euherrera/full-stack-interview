const request = require("request");
const axios = require('axios');
const fs = require("fs"); 
const output = './output.json';

const config = require("config")
class InvestmentService  {
  
  async getInvestments(id, res, req, next) {
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
    next(req.csv)
   return request
  }

  async postInvestments(res, req, id) {
    
    const data = {}
    data.csv = req.csv
    const response = await axios.post(`${config.investmentsServiceUrl}/investments/export`, data)
    .then((response) => {
       
        
        console.log('report',  req.csv)
      //console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });

    return response;
  }


}

const investmentService = new InvestmentService();
module.exports = investmentService;