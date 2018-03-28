$( document ).ready(function() {
  var maker = new Maker();
    updateListings();

  $( "#add-a-listing" ).click(function() {
    event.preventDefault();
    var list = $( '#room-info' ).val();
    maker.add(list);
    updateListings();
  })

  function updateListings(){
    $( "#Listings" ).text(maker._list);
  }
})
