const request = require("request");
const axios = require('axios');


const config = require("config")
class InvestmentService  {
  
  async getInvestments(id, res) {
    
    
    const request = await axios
      .get(`${config.investmentsServiceUrl}/investments/${id}`)
      .then((response) => {
        //console.log('body:', response.data);
        
        const {id, userId, firstName, lastName, investmentTotal, date, holdings } = response.data[0]
        const holding = holdings[0]
        const {investmentPercentage} = holding
        const holdingId = holding.id
        let newObj = {}
        newObj.id = id;
        newObj.userId = userId;
        newObj.firstName = firstName;
        newObj.lastName = lastName;
        newObj.date = date;
        newObj.holding = ''
        newObj.value = investmentTotal * investmentPercentage;
      
        const header = Object.keys(response.data[0]).map(a => JSON.stringify(a)).join('|') + '\n'
        const outData = response.data.reduce((acc, row) => {
          return acc + Object.values(row).map(_ => JSON.stringify(_)).join('|') + '\n'
        }, header)
        console.log('new:', newObj, typeof(newObj))
        console.log('csv:',outData)
        
        return outData;
      })
      .catch((error) => {
        console.error('error:', error);
        return error.toString();
      });
    return request;
   
  }

  async postInvestments(res, req) {
  
    //const { id, userId, firstName, lastName, investmentTotal, date, holdings } = req.body;
    const data = {
      id: "1",
      userId: "1",
      firstName: "Billy",
      lastName: "Bob",
      investmentTotal: 1400,
      date: "2020-01-01",
      holdings: [
          {
              id: "2",
              investmentPercentage: 1
          }
      ]
  }
    
    
    const response = await axios.post('https://httpbin.org/post', data)
    .then((response) => {
       response.data.json; 
      console.log(response.data.json)
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });

    
    
   
  }


}

const investmentService = new InvestmentService();
module.exports = investmentService;