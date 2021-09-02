require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const { join } = require('path');
const router = require('./router');

const app = express();

app.set('PORT', process.env.PORT || '5555');
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
