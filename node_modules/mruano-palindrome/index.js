module.exports = Phrase;

// Reverses a string.
// function reverse(string) {
//   //return string.split("").reverse().join("");
//   return Array.from(string).reverse().join("");
// }

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {

  this.content = content;

  // this.processor = function(string) {
  //   return string.toLowerCase();
  // }

  // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
      if (this.content){
        return this.processedContent() === this.processedContent().reverse();
      }else {
        return false;
      }
    };

  // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.content.match(/[a-z]/gi).join("").toLowerCase();  // 'g' global, 'i' upper and lower case
      //return this.processor(this.letters());
      // return this.letters().toLowerCase();
    }

  // Makes the phrase LOUDER.
    this.louder = function louder() {
      return this.content.toUpperCase();
    };

    // Returns the letters in the content.
    // For example:
    //   new Phrase("Hello, world!").letters() === "Helloworld"

    // this.letters = function letters() {
      // let theLetters = [];
      // const letterRegex = /[a-z]/i;
                                    // /[a-zA-Z]/ === /[a-z]/i
                                    // 'i' to make a case-insensitive match.
      // 1 for (let i = 0; i < this.content.length; i++) {
      // 1  let character = this.content.charAt(i);
      // 2  Array.from(this.content).forEach(function(character) {
      // 2    if (character.match(letterRegex)) {
      // 2      theLetters.push(character);
      // 2    }

      //  return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
      //};
      //return theLetters.join("");
    //}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // OVERRIDING
  // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.processor(translation);
    }
}

// INHERITANCE
TranslatedPhrase.prototype = new Phrase();
