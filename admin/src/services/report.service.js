const axios = require('axios');
const config = require("config")

class ReportService  {
  
  async postInvestments(res, req) {
    
    const data = JSON.parse(req.csv);
    console.log('report', req.csv)
    const response = await axios.post(`${config.investmentsServiceUrl}/investments/export`, data)
    .then((response) => {
       response.data.json; 
        //const data = req.csv
        console.log('report', data)
      console.log(response.data.json)
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });

    
  }


}

const reportService = new ReportService();
module.exports = reportService;