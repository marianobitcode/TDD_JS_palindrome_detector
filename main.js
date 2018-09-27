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
