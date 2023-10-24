const request = require('supertest');
const app = require('./server');

test('GET /users should return an empty array', async () => {
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([]);
});