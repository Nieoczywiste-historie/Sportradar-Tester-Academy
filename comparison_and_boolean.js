var ourBoolean;

var firstNum = 5;
var secondNum = 23;
var thirdNum = 16

var booleanVar1 = true;
var booleanVar2 = false;
var booleanVar3 = true;

/** Comparing operators:
 * Equal: == (non-strict)
 * Greater or greater-or-equal: > or >=
 * Lower or lower-or-equal; < or <=
 * Negation: !=  ( convert of == result )
 * 
 * Strict equal: === (Used for value and data type comparison);
 */

var boolanValue = firstNum == secondNum;
// console.log(boolanValue);
// console.log(firstNum < secondNum);

// Not Equal:
// console.log(firstNum != 5);
// console.log(firstNum != secondNum);

/**
 * Logical operater
 * AND: &&
 * OR: ||
 * NOT: ! 
 */

/**
 *  Boolean AND (if all statements are true only then all is true)
 *  imagine as multiplication (*) of 0 and 1
 *  T && T = T      1 * 1 = 1
 *  T && F = F      1 * 0 = 0
 *  F && T = F      0 * 1 = 0
 *  F && F = F      0 * 0 = 0
 */

// console.log((firstNum < 5) && (firstNum <= thirdNum));
// console.log((firstNum <= 5) && (firstNum <= thirdNum) && (thirdNum < secondNum));

/**
 *  Boolean OR (if one of the statements is Trued, the resul for all will be true)
 *  imagine it as addition (+) of 0 and 1
 *  T || T = T      1 + 1 = 1
 *  T || F = T      1 + 0 = 1
 *  F || T = T      0 + 1 = 1
 *  F || F = F      0 + 0 = 0
 */

//  console.log((firstNum < 5) || (firstNum <= thirdNum));
//  console.log((firstNum < 5) || (firstNum == thirdNum) || (thirdNum < secondNum));


/**
 *  Boolean NOT
 *  !T = F
 *  !F = T
 */

// console.log(!(firstNum < 5));
// console.log(!((firstNum <= 5) || (firstNum != thirdNum) || (thirdNum < secondNum)));




/**
 *  Compare different data types
 */

var number1 = 5;
var string1 = "15";
var number2 = 15;
var string2 = "Academy"

// console.log(number1 == string1); // will return 5 == "15" ==> FALSE
// console.log(number2 == string1); // will return 15 == "15" ==> TRUE

var string3 = "5"
// console.log(string1 == string3); // False
// console.log(string1 < string3);  // "15" < "5" ==> TRUE
// 10.595959 < 10.596 something like this


/**
 *  Strict comparison ==> compares the Value and the Data Type 
 */
 var stringVar1 = "This is a string";
 var stringVar2 = "This is an another string";
 var stringVar3 = "This is a string";

// console.log(stringVar1 === stringVar2); // FALSE
// console.log(stringVar1 === stringVar3); // TRUE

console.log(15 === 15); // TRUE
console.log(5 === "5"); // FALSE
console.log(5 == "5"); // TRUE - not strict equal comparison