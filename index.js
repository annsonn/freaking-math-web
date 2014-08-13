var app = require('express')();
var http = require('http').Server(app);

app.use(require('express').static(process.cwd() + '/app'));

app.get('/', function(req, res){
  res.sendfile('/app/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});