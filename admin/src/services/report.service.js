const axios = require('axios');
const config = require("config")

class ReportService  {
  
  async postInvestments(res, req, id) {
    
    
    const response = await axios.get(`${config.investmentsServiceUrl}/investments/export`)
    .then((response) => {
       
        //const data = req.csv
        //console.log('report',  req.csv)
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

const reportService = new ReportService();
module.exports = reportService;