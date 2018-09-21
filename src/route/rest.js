const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    test: 'some data',
  });
});

module.exports = router;
