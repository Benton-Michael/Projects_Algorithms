// ------------------------***** Remove Blanks ******------------------------
// Remove Blanks:
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

// function removeBlanks(str) {
//
// Make a new string to be initialized as a blank string
// let newStr = ''
// loop through the given string
// for(let i=0; i < str.length; i++) {
// if current char is not a space
// if(str[i] != ' ') {
// then concatenate with the new string
//         newStr += str[i]
//     }
// }
// return the new string
// return newStr
// }
// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
// OUTPUT: PlayThatFunkyMusic
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))
// OUTPUT: IcannotBELIEVEit'snotBUTTER

function removeBlanks(str) {
  // Make a new string to be initialized as a blank
  let newStr = "";

  // loop through the given string
  // for(let char in str){
  //     console.log(str[char])
  //     }
  // return the new string

  for (let char in str) {
    // note the different emptystring ' ' --> it has a space
    if (str[char] != " ") {
      newStr += str[char];
    }
  }

  return newStr;
}

// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))
// OUTPUTS: IcannotBELIEVEit'snotBUTTER

// ------------------------***** Get Digits ******------------------------

// Get Digits:
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// See Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
  // make a new string
  let newNumStr = "";
  // for char in string
  for (let char in str) {
    // if character is a number
    if (!isNaN(str[char])) {
      // concatenate into the new string
      // console.log(str[char])
      newNumStr += str[char];
    }
    // turn our new string into a number
    // console.log(newNumStr)
    // return the new string(number) using the Number()
    // console.log(Number(newNumStr))
  }
  return Number(newNumStr);
}

// getDigits("abc8c0d1ngd0j0!8")
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))
// OUTPUT:
// 01357924680 --> note: this is a string still (we can tell because of the leading 0)
// 1357924680 --> the Number() has been run
// The first console.log at ln81 can be removed but is helpful to see the Number() working
// Final Output: 1357924680 when console.log on the getDigits()

// ------------------------***** Acronyms ******------------------------

// Acronyms:
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
// You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

// Documentation for .split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Documentation for .toUpperCase() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

function acronym(str) {
  // there is no need for a space in the empty string below but it doesn't affect result
  let wordsArr = str.split(" ");
  let acronymStr = "";

  // console.log(wordsArr)

  // loop through words array
  for (let word in wordsArr) {
    // without the check, we will see undefined on either end side of the loop
    if (wordsArr[word].length > 0) {
      // grab the first letter of the word --> char at 0th index
      // console.log(wordsArr[word][0])
      acronymStr += wordsArr[word][0].toUpperCase();
    }
    // transform the first letter to uppercase
    // concatenate the letter grabbed into an acronym strings
  }

  // return acronym string
  return acronymStr;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// OUTPUT: TNFL-GPYW
console.log(acronym("Live from New York, it's Saturday Night!"));
// OUTPUT: LFNYISN

// ------------------------***** Count non-spaces ******------------------------
// Count Non-Spaces:
// Create a function that, given a string, returns the number of non-space characters found in the string.

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
  // initialize a counter variable
  let counter = 0;

  // loop through the string
  for (let char in str) {
    // if character is not a space
    if (str[char] != " ") {
      // increment the counter
      counter++;
    }
  }
  // return the counter
  return counter;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// OUTPUT: 29
// console.log(countNonSpaces("Hello world !"));
// OUTPUT: 11

// ------------------------***** Remove Shorter Strings: ******------------------------
// Remove Shorter Strings:
// Create a function that, given an array of strings and a numerical value, returns an array
// that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// in this test case "the" is not included in results --> it is 3 char
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, len) {
  // initialize a new array
  let newStrings = [];
  // since we cannot use push we need to provide the array index
  // initialize a nextIndex variable
  let nextIndex = 0;

  // loop through the given array
  for (let value in arr) {
    // if value is greater than or equal to the len
    if (arr[value].length >= len) {
      // add value to the new array
      // console.log(arr[value])
      newStrings[nextIndex++] = arr[value];
    }
  }
  // return the new array
  return newStrings;
}
console.log(
  removeShorterStrings(
    ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
    4
  )
);
// OUTPUT: [ 'Good morning', 'sunshine', 'Earth', 'says', 'hello' ]
console.log(
  removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);
// OUTPUT: [ 'There', 'bug', 'the', 'system' ]
