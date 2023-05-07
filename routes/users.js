const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error querying database');
      return;
    }
    res.send(results);
  });
});

module.exports = router;
