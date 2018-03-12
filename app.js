/**
 * Modules
 */
const bodyParser = require('body-parser');
const logger = require('morgan');
const models = require('./models');
const routes = require('./routes');
const nunjucks = require('nunjucks');

/**
 * Express stuff
 */

const express = require('express');
const app = express();

/**
 * Nunjucks
 */
nunjucks.configure('views', {noCache: true})
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));


/**
 * Database Sync
 */
models.db.sync()
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));

app.use('/', routes);