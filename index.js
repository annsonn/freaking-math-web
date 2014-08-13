var app = require('express')();
var logfmt = require("logfmt");
var http = require('http').Server(app);
var gzippo = require('gzippo');
 
app.use(logfmt.requestLogger());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use(require('express').static(process.cwd() + '/dist'));

http.listen(process.env.PORT || 8080);
