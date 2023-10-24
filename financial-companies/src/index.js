const express = require("express")
const config = require("config")
const companyRouter = require('./routes/company.route');

const app = express()

app.get('/companies', companyRouter);
app.get('/companies/:id', companyRouter);

// app.get("/companies", (req, res) => {
//   res.send(companies)
// })

// app.get("/companies/:id", (req, res) => {
//   const {id: requestedId} = req.params
//   const company = companies.find(({id}) => id === requestedId)
//   res.send(company)
// })

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err)
    process.exit(1)
  }
  console.log(`Server running on port ${config.port}`)
})
