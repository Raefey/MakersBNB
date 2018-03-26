describe("Breaker", function() {

var listing
var listingBooked

  beforeEach(function() {
    breaker = new Breaker();
    listing = ["8", "Hacienda Julio", true];
    listingBooked = ["88", "Chez Noelle", false];
  });

  describe("#book", function() {
    it("allows user to request to book a listing", function() {
      breaker.book(listing[0])
      expect(breaker._submittedRequest).toBe(true);
    });

    it("only allows user to book available listings", function() {
      expect(breaker.book(listingBooked[0])).toThrow("Listing not available");
    });
  });

});
