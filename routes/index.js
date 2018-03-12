const express = require('express');

const router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
router.use('/wiki', wikiRouter);

router.get('/', function (req, res, next) {
    res.send('response to GET request to /wiki/');
});



router.get('/wiki/add', function (req, res, next) {

    res.render('../views/addpage');
    next();
});


router.post('/', function (req, res, next) {
    res.send('response to POST request to /wiki/');
});

router.get('/wiki', (req, res, next) => {
    res.redirect('/')
});













//
