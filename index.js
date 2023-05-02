const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors());
const port = process.env.PORT || 5000

const ChefData = require("./Data/ChefData.json")

app.get('/', (req, res) => {
  res.send('Dragon is running!!')
})

app.get('/ChefData',(req,res) =>{
  res.send(ChefData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})