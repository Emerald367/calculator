const supertest = require('supertest');
const app = require('./server');
const request = supertest(app);
const { connectToDb } = require('./db');

it('adds numbers correctly', async () => {
    const response = await request.get('/add').query({num1: 5, num2: 3 });


expect(response.status).toBe(200);

expect(response.text).toBe('8');
});

beforeAll(async () => {
    await connectToDb();
});