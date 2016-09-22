/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *Server configuration module
*/

/* import express modules */
var express     = require('express'),
    http        = require('http'),
    path        = require('path'),
    compression = require('compression'),
    app         = express();

/* import other modules */
var favicon        = require('serve-favicon'),
    methodOverride = require('method-override'),
    bodyParser 	   = require('body-parser'),
    errorHandler   = require('errorhandler');

/* import dependencies */
var routes = require('./routes/routes.js');

/* app configuration */
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/presentation/views/index.html');
});

//app.use(favicon(__dirname + '/client/public/images/favicon.ico'));
// enable compression for css, js and html static files in the public directory
app.use(compression());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/'));

/* Error handling, running in development environment */
if ('development' == app.get('env')) {
	app.use(errorHandler({
  	    dumpExceptions: true, 
  	    showStack: true
    }));
}

/* Error handling, running in production environment */
if ('production' == app.get('env')) {
	app.use(errorHandler());
}

/* define route list to access api */
routes.initialize(app);

/* Server created */
var server = http.createServer(app);

/* Server listener starts here */
server.listen(app.get('port'), function() {
	console.log('Listening at port ' + app.get('port'));
});