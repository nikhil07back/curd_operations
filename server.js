const express = require('express')
const { connectDB } = require('./config/db')
const todoRouter= require("./router/todoRouter")
const dotenv = require('dotenv').config()
const app = express()
const  PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//database connect in the DB
connectDB()


// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))





app.use('/' ,  todoRouter )


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})