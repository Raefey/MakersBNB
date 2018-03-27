const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/breaker', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/breaker.html'));
});

app.get('/maker', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/maker.html'));
});

app.get('/confirmation', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/confirmation.html'));
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
