const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.log('Error connecting to the database', err);
    } else {
        console.log('Connection successful, Server time:', res.rows[0].now);
    }
});