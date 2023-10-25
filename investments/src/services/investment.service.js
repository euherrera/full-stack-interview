const data = require('../data.json');

//console.log(data);
class InvestmentService {

  constructor() {
    this.data = data;
  }

  async getInvestments() {
    try {
      const investments = await this.data;
      return investments;
    }catch(error) {
      console.log(error)
    }
    
  }

  async getInvestment() {
    try {
      const investments = await this.data;
      return investments;
    }catch(error){
      console.log(error)
    }
    
  }


  async postInvestment(req) {
   
    
    try{
      console.log("Body received", req.body)
      res.sendStatus(204)
    }catch(error){
      console.log(error)
    }
  }

}

const investmentService = new InvestmentService();
module.exports = investmentService;