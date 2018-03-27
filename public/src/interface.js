$( document ).ready(function() {
  var maker = new Maker();

  $( "#add-a-listing" ).click(function() {
    event.preventDefault();
    var title = $( '#listing-title' ).val();
    var price = $( '#listing-price' ).val();
    var description = $( '#listing-description' ).val();
    maker.add(title, price, description);
    updateListings();
  })

  function updateListings(){
    $( "#Title" ).text((maker._list[0].Title) + " " + (maker._list[0].Price) + " " + (maker._list[0].Description));
    //$( "#Price" ).text(maker._list[0].Price);
    //$( "#Description" ).text(maker._list[0].Description);
    console.log(maker._list)
  }
})
