const env = require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');
const calculate = require('./calcengine');
const {pool} = require('./db.js');
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
});

app.get('/subtract', (req, res) => {
   try {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const difference = calculate(num1, num2, 'subtract');
    res.send(difference.toString());
   } catch (error) {
       console.error(error);

    res.status(500).send('An error occurred');
   }
   
});

app.get('/multiply', (req, res) => {
    try {
        const num1 = Number(req.query.num1);
        const num2 = Number(req.query.num2);
        const product = calculate(num1, num2, 'multiply');
        res.send(product.toString());
    } catch (error) {
       console.error(error);

     res.status(500).send('An error occurred');
    }
   
});

app.get('/division', (req, res) => {

    try {
        const num1 = (req.query.num1);
        const num2 = (req.query.num2);
        const quotient = calculate(num1, num2, 'division');
        res.send(quotient.toString());
    } catch (error) {
       console.error(error);

       res.status(500).send('An error occurred')
    }
});

app.post('/create-calculation-data', async (req, res) => {
   let timestamp = new Date();
   
   const num1 = (req.body.num1);
   const num2 = (req.body.num2);
   const operation = (req.body.operation);

   const result = calculate(num1, num2, operation);
   const calculation = `${num1} ${operation} ${num2}`;

   const query = 'INSERT INTO Calculations (Calculation, Result, Timestamp) VALUES ($1, $2, $3)';
   const values = [calculation, result, timestamp];

    try {
        await pool.query(query, values);
        res.status(200).send('Calculation stored successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }

});

app.listen(port, () => console.log(`Server has started on port: ${port}`));

module.exports = app;

