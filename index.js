var app = require('express')();
var http = require('http').Server(app);

app.use(require('express').static(process.cwd() + '/app'));

app.get('/', function(req, res){
  res.sendfile('/app/index.html');
});

 var port = process.env.PORT || 8080;

http.listen(port, function(){});