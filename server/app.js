require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  credentials:true,
  origin: ['http://localhost:3000']
}))

const index = require('./routes');
app.use('/', index);

module.exports = app