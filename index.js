var app = require('express')();
var logfmt = require("logfmt");
var http = require('http').Server(app);

app.use(logfmt.requestLogger());
app.use(require('express').static(process.cwd() + '/app'));

app.get('/', function(req, res){
  res.sendfile('/app/index.html');
});

var port = Number(process.env.PORT || 8080);

http.listen(port, function(){
  console.log("Listening on " + port);
});
