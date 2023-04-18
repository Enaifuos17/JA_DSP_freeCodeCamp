/* 

? Palindrome Checker

Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence 
that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note: 
You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) 
in order to check for palindromes.

We'll pass strings with varying formats, 
such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, 
such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

function palindrome(str) {
  let testingArr = [];
  let strAfter = str
    .split(/[^A-Za-z0-9]/g)
    .join("")
    .toLocaleLowerCase();
  // get the last index to start the checking
  let len = strAfter.length - 1;
  // iterate over the letters and check
  for (let i = 0; i < strAfter.length; i++, len--) {
    if (strAfter[i] !== strAfter[len]) {
      testingArr.push("yo");
    }
  }
  if (testingArr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
