const express = require('express');
const path = require('path');
const app = express();

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', config.allowedDomains);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

//...
app.configure(function () {

  app.use(allowCrossDomain);
  app.use(express.static(__dirname + '/dist/openweathermap'));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
      '/dist/openweathermap'));
  });
  app.listen(process.env.PORT || 8080);
});

