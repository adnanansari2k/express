const express = require("express")
const bodyParser = require("body-parser")
const datastore= require("nedb")
const database = new datastore("dsts.db")
database.loadDatabase()
const timestamp = Date.now()

const app = express()
app.listen(process.env.PORT || 3000)
app.use(express.static("public"))
app.use(bodyParser.json()) 
app.post("/api",(request, response)=> {
    console.log(request.body)
    request.body.timestamp = timestamp
    database.insert(request.body)
    
    response.json({
      status:"success", 
      longitude: request.body.lon, 
      latitude :request.body.lat
    }) 
    
    }) 
console.log(6)
