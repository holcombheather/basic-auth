'use strict';

const supertest = require('supertest');
const { app } = require('../../../../src/server');
const { sequelize, Users } = require('../../models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Auth Routes', () => {
  beforeEach(async () => {
    await Users.destroy({ truncate: true });
  });

  test('allow for user signup', async () => {
    const response = await request.post('/signup').send({
      username: 'Lucky',
      password: 'woof',
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Lucky');
  });

  test('allow for user signin', async () => {
    await Users.create({
      username: 'Lucky',
      password: 'woof',
    });

    const response = await request.post('/signin').send({
      username: 'Lucky',
      password: 'woof',
    });

    expect(response.status).toEqual(200);
  });
});
