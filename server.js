const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

app.configure(function () {

  app.use(cors());
  app.use(express.static(__dirname + '/dist/openweathermap'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/openweathermap'));
});
app.listen(process.env.PORT || 8080);

