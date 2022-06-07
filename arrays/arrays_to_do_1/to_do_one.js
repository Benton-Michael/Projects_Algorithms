// ----------------------------Push Front -----------------------------
// General Instrucitons: Use the JavaScript language for all challenges. 
// Do not use built-in methods 
// (unless otherwise instructed) 
// or create any additional arrays. (.length is a property, and is allowed.)

// Push Front:
// Given an array and an additional value, insert this value at the beginning of the array. 
// You may use .push(), but you can do this without it!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
// when values need to shift right, for loop goes left (vice verca)

// ****Solution****
function pushFront(array, value) {
  for (let i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  // set array [0] to the value we are provided
  array[0] = value;

  // return the array we're given
  return array;
}
// console.log(pushFront([5, 7, 2, 3], 8));
// console.log(pushFront([99], 7));
// OUTPUT IS: [8, 5, 7, 2, 3]
// OUTPUT IS: [7, 99]

// ----------------------------Pop Front------------------------
// Given an array, remove and return the value at the beginning of the array. 
// Prove the value is removed from the array by printing it.
// You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

// Solution:

function popFront(array) {

    // save 1st value of the array so we can edit it
    let firstValue = array[0];
    // loop through the array shifting all values to the left
    for(let i = 0; i < array.length; i++) {
        // now shifting values left
        array[i] = array[i + 1]
    }
    // decrease the length of the array by 1 (length property of array = 4)
    array.length = array.length - 1;
    // log the array 
    console.log(array)
    // return the removed value 
    return firstValue;
}

    // console.log(popFront([0, 5, 10, 15]));
    // OUTPUT IS: [5, 10, 15]
    // 0
    // console.log(popFront([4,5,7,9]));
    // OUTPUT IS: [5,7,9]
    // 4


// ----------------------------Insert At--------------
// Given an array, index, and additional value, insert the value into array at given index. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
// You may use .push(), you are able do this without it though!

// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]




// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]

// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
