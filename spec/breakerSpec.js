describe("Breaker", function() {

  beforeEach(function() {
    breaker = new Breaker();
  });

  describe("#book", function() {
    it("allows user to request to book a listing", function() {
      breaker.book("Cindy's listing")
      expect(breaker._submittedRequest).toBe(true);
    });
  });
});
