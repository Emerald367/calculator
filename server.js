const env = require('dotenv').config();
const express = require('express')
const app = express()
const db = require('./db');
const calculate = require('./calcengine')
module.exports = app;

const port = 4000

app.get('/add', (req, res) => {
    try {
        const num1 = Number(req.query.num1);
        const num2 = Number(req.query.num2);
        const sum = calculate(num1, num2, 'add');
        res.send(sum.toString());
    } catch (error) {
        console.error(error);

     res.status(500).send('An error occurred');
    }
})

app.get('/subtract', (req, res) => {
   const difference = calcengine.subtract(req.query.num1, req.query.num2);
   res.send(difference.toString());
})

app.get('/multiply', (req, res) => {
    const product = calcengine.multiply(req.query.num1, req.query.num2);
    res.send(product.toString());
})

app.get('/division', (req, res) => {
    const quotient = calcengine.divide(req.query.num1, req.query.num2);
    res.send(product.toString());
})

app.post('/create-calculation-data', (req, res) => {

})

app.listen(port, () => console.log(`Server has started on port: ${port}`))

module.exports = app;

