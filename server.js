const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('src'))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://localhost:27017', function(err, database){
  if(err) return console.log(err)
  db = database.db('room_listing')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function (req, res) {
  db.collection('listing').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('index.ejs', {listings: result})
  })
})

app.post('/listings', function (req, res) {
  db.collection('listing').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log(req.body)
    res.redirect ('/')
  })
})
