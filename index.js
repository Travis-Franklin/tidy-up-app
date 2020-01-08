const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
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

const { stuff } = require('./models');


app.get( '/', (req, res) => {
    console.log(stuff.all());
    res.send('hello');
})

app.get('/create', (req, res) => {
    console.log(stuff.all());
    res.render('form');
})


app.post('/create', parseForm, (req, res) => {
    console.log('A post.');
    console.log(req.body);
    stuff.create(req.body.name, req.body.givesJoy);
    res.redirect('/create');
})

app.get('/create/success', (req, res) => {
    console.log(stuff.all());
    res.send('success');
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});