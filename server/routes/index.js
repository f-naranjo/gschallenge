const express = require('express');
const router  = express.Router();
const phones = require('../db/phones.json')

router.get('/phones', (req, res, next) => {
    res.json(phones);
  });

module.exports = router;