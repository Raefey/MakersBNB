'use strict';
describe('Feature test:', function(){
  var maker;
})

beforeEach(function(){
  maker = new Maker();
})
describe('a maker can view the list of the spaces', function(){

  it('returns the list of the spaces', function(){
    maker.add({'id': 123, 'userName': 'Cindy', 'email': 'cindy@gmail.com', 'description': 'nice room', 'price': '£100'})
    expect(maker._list).toContain({'id': 123, 'userName': 'Cindy', 'email': 'cindy@gmail.com', 'description': 'nice room', 'price': '£100'});
  })


})
