const http = require('http');
const server = http.createServer(app);
const app = express();
const express = require('express');
const PORT = 3000;
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

const helmet = require('helmet');
app.use(helmet());

const es6Render = require('express-es6-template-engine');
app.engine('html', es6Render);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static('public'));

const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({
    extended: true
});


server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});