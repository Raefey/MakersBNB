'use strict';

describe('maker', function(){
  var maker;


  beforeEach(function(){
    maker = new Maker();
  })

  it('has the empty list as default', function(){
    expect(maker._list).toEqual([]);
  })

  it('is able to add the spaces into the list', function(){
    maker.add('room info');
    expect(maker._list).toContain('room info');
  })
})
