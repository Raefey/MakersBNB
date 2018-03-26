'use strict';

function Maker(){
  this._list = []
}

Maker.prototype.add = function(roomInfo){
  this._list.push(roomInfo)
}
