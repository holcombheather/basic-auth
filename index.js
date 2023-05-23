'use strict';

require('dotenv').config();

const { sequelize } = require('./src/auth/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3002;

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    start(PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });


