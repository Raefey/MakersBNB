function Breaker() {
  this._submittedRequest = false;
  this._name = "";
  this._username = "";
  this._email = "";
  this._password = "";
}

Breaker.prototype.book = function(listing) {
if (listing[2] == false) { throw "Listing not available" }
else (listing[2] == true) { this._submittedRequest = true }



  this._submittedRequest = true;

}
