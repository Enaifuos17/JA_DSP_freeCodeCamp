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

/*

? Roman Numeral Converter

Convert the given number into a roman numeral.

*/

function convertToRoman(num) {
  let answer = [];
  let obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let objLength = Object.keys(obj).length; // keys || values
  let arabicNums = Object.values(obj);
  let romanNums = Object.keys(obj);
  //
  for (let i = 0; i < objLength; i++) {
    while (num >= arabicNums[i]) {
      answer.push(romanNums[i]);
      num -= arabicNums[i];
    }
  }
  return answer.join("");
}

console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(5)); // V
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(12)); // XII
console.log(convertToRoman(16)); // XVI
console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(501)); // DI
console.log(convertToRoman(891)); // DCCCXCI
console.log(convertToRoman(1023)); // MXXIII
console.log(convertToRoman(3999)); // MMMCMXCIX

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/*

? Caesars Cipher

One of the simplest and most widely known ciphers is:
a Caesar cipher, 
also known as a shift cipher. 

In a shift cipher 
the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input 
and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  let answer = [];
  let alphbtReg = /[A-Z]/;
  let first13 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let second13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  // mainLoop
  for (let i = 0; i < str.length; i++) {
    // Check each letter with the str[i]
    for (let j = 0; j < first13.length; j++) {
      if (str[i] == first13[j]) {
        answer.push(second13[j]);
        break;
      }
    }
    // if str[i] is not a letter
    if (!alphbtReg.test(str[i])) {
      answer.push(str[i]);
    }
  }
  return answer.join("");
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
