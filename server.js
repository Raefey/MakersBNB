const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://Noelle:makers@ds227469.mlab.com:27469/makersbnb', function(err, database){
  if(err) return console.log(err)
  db = database.db('makersbnb')

  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/maker', function (req, res) {
  res.render('maker.ejs');
})

app.get('/listings', function (req, res) {
  db.collection('listing').find().toArray(function(err, result) {
  if (err) { return console.log(err) };
  res.render('listings.ejs', {listings: result});
  })
})

app.post('/listings', function (req, res) {
  db.collection('listing').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log('Maker Post: ' + result)
    res.redirect ('/listings')
  })
})

app.get('/breaker', function (req, res) {
  res.render('breaker.ejs')
})

app.get('/booking-request', function (req, res) {
  db.collection('booking').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('booking-request.ejs', {booking: result})
  })
})

app.post('/booking-request', function (req, res) {
  db.collection('booking').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log('Breaker Post: ' + result)
    res.redirect ('/booking-request')
  })
})
