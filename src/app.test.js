const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  test('responds with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({data: "Hello World!"});
  });
});