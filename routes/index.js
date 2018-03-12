const express = require('express');

const router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
//router.use('/wiki', wikiRouter);

router.get('/', function (req, res, next) {
    res.send('response to GET request to /wiki/');
});

router.post('/', function (req, res, next) {
    res.send('response to POST request to /wiki/');
});

router.get('/wiki', (req, res, next) => {
    res.redirect('/')
});

router.get('/wiki/add', function (req, res, next) {
    res.render('../views/addpage');
});

router.post('/wiki/add', (req, res, next) => {
    res.json(req.body)
    // const title = req.body.title;
    // const text = req.body.text;
    // res.render('index', {title: title, text: text})
})