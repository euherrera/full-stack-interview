const data = require('../data.json');

//console.log(data);
class InvestmentService {

  constructor() {
    this.data = data;
  }

  async getInvestments() {
   
    const investments = await this.data;
    return investments;
  }

  async getInvestment() {
    
    const investments = await this.data;
    return investments;
  }


  async postInvestment(req) {
   
    // Prepare request
    //const { articleId, articleType, articleBrandId, articleBarcode, articleZ3Barcode, articleDescription, articleLongDescription, articleWebDescription, articleSuperCategory, articleCategoryCode, articleCategory, articleSectionCode, articleSection, articleSubSectionCode, articleSubSection, articleFamilyCode, articleFamilyProductType, directDelivery, articleColour, articleRegularVendorCode, articleRegularVendorName, articleRegularVendorProductID, articleVatRate, eachLength, eachWidth, eachHeight, eachWeight, eachDepth, eachVolume, eachQuantity, imageUrl } = req.body;
    console.log("Body received", req.body)
    res.sendStatus(204)
   
  }

}

const investmentService = new InvestmentService();
module.exports = investmentService;