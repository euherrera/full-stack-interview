
class ReportController {
    constructor(reportService) {
      this.reportService = reportService;
    }

    async postInvestments(req, res) {
      const { id } = req.params
      const investments = await this.reportService.postInvestments(req, id);
      return res.status(200).send(investments);
    }

    
  }
  
  module.exports = ReportController;