const request = require("request");
const axios = require('axios');


const config = require("config")
class InvestmentService  {
  
  async getInvestments(id, res, req) {
         
          console.log('inside', req.csv)
          //return  req.csv;
          const response = await axios.post(`${config.investmentsServiceUrl}/investments/export`, req.csv)
          .then((response) => {
            response.data.json; 
              //const data = req.csv
              console.log('report',  req.csv)
            //console.log(response.data)
            return response.data
          })
          .catch((error) => {
            console.error('error:', error);
            return error.toString();
          });

        return req.csv;
        
   
  }


}

const investmentService = new InvestmentService();
module.exports = investmentService;