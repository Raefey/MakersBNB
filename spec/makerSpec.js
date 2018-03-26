'use strict';

describe('maker', function(){
  var maker;
  var list;
})

beforeEach(function(){
  maker = new Maker();
  var list = []
})

it('has the empty list as default', function(){
  expect(maker._list).toEqual([]);
})

it('is able to add the spaces into the list', function(){
  maker.add({'id': 123, 'userName': 'Cindy', 'email': 'cindy@gmail.com', 'description': 'nice room', 'price': '£100'} );
  expect(maker._list).toContain([{'id': 123, 'userName': 'Cindy', 'email': 'cindy@gmail.com', 'description': 'nice room', 'price': '£100'}]);
})
