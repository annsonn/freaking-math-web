var app = require('express')();
var logfmt = require("logfmt");
var http = require('http').Server(app);

app.use(logfmt.requestLogger());
app.use(require('express').static(process.cwd() + '/dist'));

app.get('/', function(req, res){
  res.sendfile('/dist/index.html');
});

var port = Number(process.env.PORT || 8080);

http.listen(port, function(){
  console.log("Listening on " + port);
});
