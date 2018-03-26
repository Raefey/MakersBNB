'use strict';

function Maker(){
  this._list = []
}

Maker.prototype.add = function(roomInfo){
  console.log(roomInfo)
  this._list.push(roomInfo)
}
