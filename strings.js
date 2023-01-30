var doubleQuote = "this is a doube quote string";
var singleQuote = 'this is a doube quote string';
var tickedString = `this is a tick string`


var specialString;

specialString = "yet another string using \"double quote\" as string";
// console.log(specialString);

specialString = 'yet another string using "double quote" as string';
// console.log(specialString);

specialString = "yet another string using 'double quote' as string";
// console.log(specialString);

specialString = `yet another string using "double quote" as string`;
// console.log(specialString);

/**
 * ESCAPED CHARACTERS
 * \'	single quote
 * \"	double quote
 * \\	backslash
 * \n	newline
 * \r	carriage return
 * \t	tab
 * \b	backspace
 * \f	form feed
 */
var escape1 = "just a \\ character";
// console.log(escape1);

var newLine = "This string will have a \n new line mention";
// console.log(newLine);

var tabLine = "This \t has a tab and \t another tab in the text";
// console.log(tabLine);

var carReturn = "I already \r forgot what this do ";
// console.log(carReturn);

var backSpace = "wonder what \b\b\b\bThis does";
// console.log(backSpace);

var formFeed = "this has form \f feed in it";
// console.log(formFeed);

/* Can get specific character based on position in string 
var someStr = "This is MY random string";
console.log(someStr);
var character = someStr[8];
console.log(character);
*/
/* Strings ar IMMUTABLE - cannot be partially changed 
   MEANING: you cannot change a character in a string!!!
*/

/*someStr = "I just modified this string completely"; 
console.log(someStr); */

// someStr[8] = "W"; // here should throw and error but JS can be ignorant
// console.log(someStr); 

// someStr = "This is WY random string";
// console.log(someStr); 

// // this string is immutable AND a constant 
// const myConstString = "this should net change at all";
// myConstString[5] = "T";
// console.log(myConstString);

// You cannot fix a typo in a string!!!
// var myString1 = "My string wtih a typo";

// myString1[11] = "i";
// myString1[12] = "t";

// console.log(myString1);

// you have to change the WHOLE STRING AGAIN
// myString1 = "My string with a typo";
// console.log(myString1);

// myString1 = "My first";
// console.log(myString1);
// myString1 = "Second";
// console.log(myString1);
// myString1 = "Third";
// console.log(myString1);
// myString1 = "Last";
// console.log(myString1);

// console.log(myString2);
// var myString2 = "Whatever";

// console.log(myString2);

// explanation of Replace or other methods
var toBeReplaced = "wtih";
var replaceWord = "with"
var myString = "My string wtih with a typo wtih and wtih because i an wtih";

var firstPartOfString = "My string ";
var partOfStringAfterFindToEnd = " with a typo wtih and wtih because i an wtih";

var resultOfNewString = firstPartOfString + replaceWord + partOfStringAfterFindToEnd;

// console.log(myString);
// console.log(resultOfNewString)

// concatenation or adding string to string
var myName = "Arnold"
var day = 2;
var introduction = "Hello, my name is " + myName + "! Nice to meet you all!" 
+ " This is day " + day + ", that we see each other!";
// console.log(introduction);

var boolVar = true;
var loveJS = "I love JS and that is the ";

var myTrueLove = loveJS + boolVar + " statement";
// console.log(myTrueLove);

var number = 33;
var numToInt = "" + number;

// console.log(number);
// console.log(numToInt);

/**
 * 
 *    LENGTH OF A STRING
 * 
 */

// var myString = "My string wtih with a typo wtih and wtih because i an wtih";
var lengthOfMyString = myString.length;
console.log(lengthOfMyString);

var firstCharOfMyString = myString[0];

var lastCharacterInMyString = myString[myString.length - 1];
console.log(lastCharacterInMyString);

var secondLastCharacterInMyString = myString[myString.length - 2];
console.log(secondLastCharacterInMyString);

