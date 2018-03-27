'use strict';

function Maker(){
  this._list = []
}

Maker.prototype.add = function(title, price, description){
  var new_listing = {
    "Title": title,
    "Price": price,
    "Description": description
  }
  this._list.push(new_listing)
}
