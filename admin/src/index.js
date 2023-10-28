const express = require("express")
const bodyParser = require("body-parser")
const config = require("config")
// const request = require("request")
const investmentsRouter = require('./routes/investment.route');
const companiesRouter = require('./routes/company.route');
const app = express()

app.use(bodyParser.json({limit: "10mb"}))


app.get('/investments/:id', investmentsRouter);
app.get('/companies/:id', companiesRouter);
app.post('/investments/export', investmentsRouter);

// app.get("/investments/:id", (req, res) => {
//   const {id} = req.params
//   request.get(`${config.investmentsServiceUrl}/investments/${id}`, (e, r, investments) => {
//     if (e) {
//       console.error(e)
//       res.send(500)
//     } else {
//       res.send(investments)
//     }
//   })
// })

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err)
    process.exit(1)
  }
  console.log(`Server running on port ${config.port}`)
})
