const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/openweathermap'));
app.use(cors());
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/openweathermap'));});
app.listen(process.env.PORT || 8080);