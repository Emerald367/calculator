const supertest = require('supertest');
const app = require('./server');
const request = supertest(app);
const { connectToDb } = require('./db');

beforeAll(async () => {
    await connectToDb();
});

it('adds numbers correctly', async () => {
    const response = await request.get('/add').query({num1: 5, num2: 3 });


expect(response.status).toBe(200);

expect(response.text).toBe('8');
});

it('subtracts numbers correctly', async () => {
    const response = await request.get('/subtract').query({num1: 4, num2: 3});

expect(response.status).toBe(200);

expect(response.text).toBe('1');

});

it('multiplies numbers correctly', async () => {
    const response = await request.get('/multiply').query({num1: 2, num2: 8 });

expect(response.status).toBe(200);

expect(response.text).toBe('16');

});

it('divides numbers correctly', async () => {
    const response = await request.get('/division').query({num1: 20, num2: 4});

expect(response.status).toBe(200);

expect(response.text).toBe('5');
});


