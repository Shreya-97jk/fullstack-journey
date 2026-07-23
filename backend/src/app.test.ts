import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from './app';

describe('GET /books', () => {
  it('returns 401 without an auth token', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toBe(401);
  });
});

describe('authenticated book endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const email = `test-${Date.now()}@example.com`;
    const password = 'TestPass123';
    await request(app).post('/auth/signup').send({ email, password });
    const loginRes = await request(app).post('/auth/login').send({ email, password });
    token = loginRes.body.token;
  });

  it('GET /books returns 200 and an array', async () => {
   const res = await request(app).get('/books').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it('POST /books with valid body returns 201', async () => {
    const res = await request(app)
      .post('/books')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Book', author: 'Test Author', status: 'want-to-read' });
    expect(res.status).toBe(201);
  });
  it('POST /books with invalid body returns 400', async () => {
    const res = await request(app)
      .post('/books')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Missing author and status' });
    expect(res.status).toBe(400);
  });
  describe('auth endpoints', () => {
  it('POST /auth/signup returns 201 for a new user', async () => {
    const email = `signup-test-${Date.now()}@example.com`;
    const res = await request(app).post('/auth/signup').send({ email, password: 'TestPass123' });
    expect(res.status).toBe(201);
  });

  it('POST /auth/login returns 200 with a token for valid credentials', async () => {
    const email = `login-test-${Date.now()}@example.com`;
    const password = 'TestPass123';
    await request(app).post('/auth/signup').send({ email, password });
    const res = await request(app).post('/auth/login').send({ email, password });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
});