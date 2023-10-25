const config = require("config")
const axios = require('axios');

const routing = (req, res, next)=>{
    const request =  axios
    .get(`${config.companiesServiceUrl}/companies/${req.params.id}`)
    .then((response) => {
      req.name = response.data.name;
      console.log('middle', req.name)
      return response.data.name;
    })
    .catch((error) => {
      console.error('error:', error);
      return error.toString();
    });

    next();
};  
module.exports = routing





   




