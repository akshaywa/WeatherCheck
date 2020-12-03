const express = require('express');
const path = require('path');
const app = express

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});


app.use(e();xpress.static(__dirname + '/dist/openweathermap'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/openweathermap'));});
app.listen(process.env.PORT || 8080);



