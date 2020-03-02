require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const index = require('./routes');

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
  }))

app.use('/', index);

module.exports = app