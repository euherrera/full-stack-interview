const axios = require('axios');
const config = require("config")

class ReportService  {
  
  async postInvestments(res, req, id) {
    const data = {
        "name": "test",
        "surname": "last"
    }
   
    //console.log('report', req.csv)
    const response = await axios.post(`${config.investmentsServiceUrl}/investments/export`, data)
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

    return response;
  }


}

const reportService = new ReportService();
module.exports = reportService;