'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user');

// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:?cache=shared' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);

const Users = userSchema(sequelize, DataTypes);

module.exports = { sequelize, Users };

