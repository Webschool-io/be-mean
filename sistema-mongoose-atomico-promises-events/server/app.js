'use strict';

const express = require('express')
		, path = require('path')
		, favicon = require('serve-favicon')
		, logger = require('morgan')
		, cookieParser = require('cookie-parser')
		, bodyParser = require('body-parser')
		;

require("mongoose").connect('mongodb://localhost/instagram');

const routes = require('./routes/index')
		, users = require('./routes/users')
		;

// Modules
const UsersAPI = require('./modules/users/routes_express')
		, PhotosAPI = require('./modules/photos/routes_express')
		;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// API JSON
app.use('/api/users', UsersAPI);
app.use('/api/photos', PhotosAPI);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
