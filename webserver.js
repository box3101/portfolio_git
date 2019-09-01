var express = require('express');
var app = express();

var execPHP = require('./execphp.js')();

execPHP.phpFolder = 'D:\\이찬용팀장 작업물\\portfolio-master\\portfolio-master';

app.use('*.php',function(request,response,next) {
   execPHP.parseFile(request.originalUrl,function(phpResult) {
      response.write(phpResult);
      response.end();
   });
});

app.use(express.static(__dirname)); 

app.listen(3000, function () {
   console.log('Node server listening on port 3000!');
});