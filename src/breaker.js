var pg = require(‘pg’);
var connectionString = "postgres://userName:password@serverName/ip:port/nameOfDatabase";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var query = pgClient.query("SELECT id from Customer where name = 'customername'");


function Breaker() {
  this._submittedRequest = false;
  this._name = "";
  this._username = "";
  this._email = "";
  this._password = "";
}

Breaker.prototype.book = function(listing_id) {

  this._submittedRequest = true;
}
