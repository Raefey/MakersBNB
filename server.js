const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('src'))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://julesnuggy:password@ds227199.mlab.com:27199/test_database', function(err, database){
  if(err) return console.log(err)
  db = database.db('test_database')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/maker', function (req, res) {
  db.collection('listing').find().toArray(function(err, result) {
  if (err) { return console.log(err) };
  res.render('maker.ejs', {listings: result});
  })
})

app.post('/maker', function (req, res) {
  db.collection('listing').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log('Maker Post: ' + result)
    res.redirect ('/maker')
  })
})

app.get('/breaker', function (req, res) {
  db.collection('booking').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('breaker.ejs', {booking: result})
  })
})

app.post('/breaker', function (req, res) {
  db.collection('booking').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log('Breaker Post: ' + result)
    res.redirect ('/confirmation')
  })
})

app.get('/confirmation', function (req, res) {
  db.collection('booking').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('confirmation.ejs', {booking: result})
  })
})
