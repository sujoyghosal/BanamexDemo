var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('www'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/www/index.html'));
});
app.get('/directions',function(req,res){
  res.sendFile(path.join(__dirname + '/www/diirections.png'));
});
app.listen(8000);
console.log('Server is listening to http://localhost/ on port 8000');