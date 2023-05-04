const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors());
const port = process.env.PORT || 5000

const ChefData = require("./Data/ChefData.json")
const recipeData = require("./Data/RecipesData.json")
const reviewData = require("./Data/ClientReview.json")

app.get('/', (req, res) => {
  res.send('Dragon is running!!')
})

app.get('/ChefData',(req,res) =>{
  res.send(ChefData)
})

app.get('/ChefData/:id',(req,res) =>{
  const id = req.params.id
  const chef = ChefData.find(pd => pd.id == id)
  res.send(chef)
})

app.get('/recipesData',(req,res) =>{
  res.send(recipeData)
})

app.get('/reviewData',(req,res) =>{
  res.send(reviewData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})