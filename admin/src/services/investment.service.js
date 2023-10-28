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
      const data = {}
      data.csv = req.csv
      fs.writeFile(output, JSON.stringify(data), (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log("The written has the following contents:"); 
          console.log(fs.readFileSync("output.json", "utf8")); 
        } 
      }); 
      return response.data;
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });
   return request
  }

  async postInvestments(res, req, id) {
    
    const data = output
    // data.csv = req.csv
    console.log(data)
  
    const response = await axios.post(`${config.investmentsServiceUrl}/investments/export`, JSON.parse(data))
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