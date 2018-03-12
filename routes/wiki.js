const express = require('express');
const router = express.Router();
const Page = require('../models').Page;



router.post('/', (req, res, next) => {
      Page.create(req.body)
          .then(result => res.json(result));
});

module.exports = router;
