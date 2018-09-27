// - We include two NPM modules using the require function.

let assert = require("assert");       // an assertion library that lets us assert that things are true in our tests
let Phrase = require("../index.js");  // the Phrase object itself:

// we’ll use two functions from assert:
// 'describe'  -> # takes a string and another function
// 'it'        -> # takes a string and another function

describe("Phrase", function() {                       // The object
  describe("#palindrome", function() {                // Testing out one method of the object.

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());            // we’ve used assert to assert that "apple" should not be a palindrome
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return false for an empty string", function() {
      let emptyPhrase = new Phrase('');
      assert(!emptyPhrase.palindrome());
    });

    // Adding a Pending Test: you accomplish it only writting the following
    // it("should return true for a mixed-case palindrome");
  });
  /*
  describe("#letters", function() {                            // Testing out another method
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      // When posible, use native assertions, like this one:
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
      // Instead of writting the test by yourself:
      // assert(punctuatedPalindrome.letters() === "MadamImAdam");
    });
  });
  */
});
