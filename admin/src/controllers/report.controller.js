
class ReportController {
    constructor(reportService) {
      this.reportService = reportService;
    }

    async postInvestments(req, res) {
     
      const investments = await this.reportService.postInvestments(req);
      return res.status(200).send(investments);
    }

    
  }
  
  module.exports = ReportController;