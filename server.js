const env = require('dotenv').config();
const express = require('express')
const app = express()
const db = require('./db');
const calcengine = require('./calcengine')
const port = 4000



app.get('/add', (req, res) => {
    res.send('hello world')
})

app.get('/subtract', (req, res) => {

})

app.get('/multiply', (req, res) => {

})

app.get('/division', (req, res) => {

})

app.post('/create-calculation-data', (req, res) => {
    
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))



