var arrayOne = [10, 20, 40, 79];
var arrayTwo = [5, "five", true];
var stringArray = ["a", "b", "c", "d"];

var elementOfArray = arrayTwo[2];

// console.log(arrayOne.length);
// console.log(arrayOne[arrayOne.length - 1]);

var emptyArray = [];
// console.log(emptyArray.length);
// console.log(emptyArray[0]);

var undefinedVariable;
var arrayWithUndefinedValue = [1, "test", undefinedVariable, []];
// console.log(arrayWithUndefinedValue[3]);

/**
 *  Multidimensional Arrays - Array(s) inside another array(s)
 */

var confusing = 666;
var twoDimensional = [1, "test", 78, "lol", ["multi", "dim", "array", "inside", "another"], "getting", confusing];
// console.log(twoDimensional[2]);  // we get the 78 as result
 
// console.log(twoDimensional[4][3]); // we get the 'inside' from nested array

var multiArrayOne = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// we want value 8
var eight = multiArrayOne[2][1];
// console.log(eight);

// we want value 11
var eleven = multiArrayOne[3][0][1];
// console.log(eleven);

// breakdown of arrays one by one
// console.log(multiArrayOne[3]);
// console.log(multiArrayOne[3][0]);
// console.log(multiArrayOne[3][0][1]);

var fourteen = multiArrayOne[3][2];
// console.log(fourteen);

/**
 *  Array manipulations
 */

var twoDimensional2 = [1, "test", 78, "lol", ["multi", "dim", "array"]];

twoDimensional2[4][0] = 2;
// console.log(twoDimensional2);



// .push() command, adding value(s) on end of array when called
var myArrayOne = [1, "test", 78, "lol"];

myArrayOne.push(5);
// console.log(myArrayOne);



// pop(), removes the last element of array when called
var myArrayTwo = [1, "test", 78, "lol"];
// myArrayTwo.pop(); // remove without storing/saving
var poppedElement = myArrayTwo.pop(); // remove and store element in variable
// console.log(poppedElement);
// console.log(myArrayTwo);

// myArrayTwo.pop();
// console.log(myArrayTwo);
// myArrayTwo.pop();
// console.log(myArrayTwo);



// .shift() command - removes an element from beginning of an array (similar .pop())
var myArrayThree = [1, "test", 78, "lol", 22];
// console.log(myArrayThree[0]);
myArrayThree.shift();
// console.log(myArrayThree);
// console.log(myArrayThree[0]);

// Array always starts to count element position form 0

// .unshift() command / adding an element to beginning of an array (similar to push())
var myArrayFour = [1, "test", 78, "lol", 22];
// console.log(myArrayFour[0]);
// console.log(myArrayFour[1]);
myArrayFour.unshift("new first element");
// console.log(myArrayFour[0]);
// console.log(myArrayFour[1]);
// console.log(myArrayFour);

// also using these commands you can add Arrays as elemenst to Arra(s)
var myArrayExample = ["Garfield", "stripes", "cat"];

// What are the favorite things to do for Garfield? = Sleep and eat lasagna
myArrayExample.push(["sleeping", "lasagna"]);
console.log(myArrayExample);

console.log("Favorite thigs for " + myArrayExample[0] + " are: " + myArrayExample[3][0] 
+ " and " + myArrayExample[3][1] + " just as for any fat cat.");