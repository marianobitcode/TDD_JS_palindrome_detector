(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mruano-palindrome");
// // alert(new Phrase("Madam, I'm Adam.").palindrome());
//
// // PROMPT
// let string = prompt("Please enter a string for palindrome testing:");
// let phrase = new Phrase(string);
//
// if (phrase.palindrome()) {
//   alert(`"${phrase.content}" is a palindrome!`);
// } else {
//   alert(`"${phrase.content}" is not a palindrome.`)
// }

// function palindromeTester() {
function palindromeTester(event) {
  // In this example we are not using a server,
  // Instead, our “server” is just a static web page, we can’t handle such a submission
  // so we need to prevent this default behavior as follows:
  event.preventDefault(); // event is a special object that JavaScript provides for just this sort of case.

  // let string = prompt("Please enter a string for palindrome testing:");
  // let phrase = new Phrase(string);

  // target -> the form itself.
  // phrase -> the key of the Text Area.
  let phrase = new Phrase (event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    //alert(`"${phrase.content}" is a palindrome!`);
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    //alert(`"${phrase.content}" is not a palindrome.`)
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");

  tester.addEventListener("submit", function(e) {
   // palindromeTester(event);
   palindromeTester(e);
  });

  //let button = document.querySelector("#palindromeTester");

  //button.addEventListener("click", palindromeTester);
  // button.addEventListener("click", function() {
  //   palindromeTester();
  // });
});

},{"mruano-palindrome":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
