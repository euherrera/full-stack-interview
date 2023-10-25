const config = require("config")
const axios = require('axios');

const routing = async (req, res, next)=>{
    
    const request = await axios
      .get(`${config.investmentsServiceUrl}/investments/${id}`)
      .then((response) => {
        //console.log('body:', response.data);
        console.log(req.name)
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
        newObj.holding = req.name
        newObj.value = investmentTotal * investmentPercentage;
      
        const header = Object.keys(newObj).map(a => JSON.stringify(a)).join('|') + '\n'
        const outData = Object.values(newObj).map(a => JSON.stringify(a)).join('|') + '\n'
        
        console.log('csv:',newObj)
        console.log('csv:',header.concat(outData))
        req.csv = header.concat(outData);
        return header.concat(outData);
      })
      .catch((error) => {
        console.error('error:', error);
        return error.toString();
      });
    next();
};  
module.exports = routing





   




