const config = require("config")
const axios = require('axios');

const send = async (req, res, next)=> {
try {
    console.log('middle-send', req.csv)
    return  req.csv;
   }catch(error){
    console.error('error:', error);
    return error.toString();
   }
   next()
}

module.exports = send