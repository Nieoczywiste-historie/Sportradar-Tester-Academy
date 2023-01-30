/**
 * Functions are pieces of code you will run multiple times and wish to reuse
 * instead of writing it again and again.
 */

function ourFirstFunction(){

    console.log("hello World");

}

// ourFirstFunction();

// Passing values as Arguments
function addTwoNumber(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumber(4, 7);
// addTwoNumber("4", 7);
function addTwoNumber(num1, num2){
    return num1 + num2;
}

var twoNumbersAdded = 2
// addTwoNumber(4, 7);
// console.log(twoNumbersAdded);
// console.log(addTwoNumber(4, 7));
// console.log(twoNumbersAdded * addTwoNumber(4, 7));

/**
 *  Global and local scope of variables in functions
 * 
 */
var globalVariable = 4;

function incrementBy3(){
    var localVariable;
    localVariable = globalVariable + 3;
    console.log(localVariable);
}

// incrementBy3();
// console.log(globalVariable);
// console.log(localVariable);


/** You can declare global variable inside a function */

var newGlobal = 5;


function firstFunc(){
    locVariable1 = "Global inside a function";
    console.log("Global: " + newGlobal);
    console.log("Local1: " + locVariable1);
}

function secondFunc(){
    var locVariable2 = "This is local declared with Data Type";
    console.log("Global: " + newGlobal);
    console.log("Local1: " + locVariable1);
    console.log("Local2: " + locVariable2);
}

// firstFunc(); // function has to be called in order to create the global variable named locVariable1 inside the function
// secondFunc();
// console.log("Gloooooooiooooooooooooobal: " + newGlobal);
// console.log("Locaaaaaaaaaaaaaaaaal1: " + locVariable1);


/**
 *  Returning values from a function
 */

function addTwoNumbers(num1, num2){
    var locVar = num1 + num2;
    console.log(locVar);
}

// EXECUTE THESE LINES
// addTwoNumbers(); // will return "NaN" - Not a Number
// addTwoNumbers(1); // will return "NaN" - Not a Number
// addTwoNumbers(3, 5);

function substractTwoNumbers(num1, num2){
    var anotherVar = num1 - num2;
    return anotherVar;
}

substractTwoNumbers(15, 7);
// var num1 = substractTwoNumbers(15, 7) AND var num2 = substractTwoNumbers(55, 19) 
// the RESULT substractTwoNumbers(num1, num2)
var someVar = substractTwoNumbers(substractTwoNumbers(15, 7), substractTwoNumbers(55, 19));
// console.log(someVar);

// even skipping assigning to another variable
// console.log(substractTwoNumbers(substractTwoNumbers(15, 7), substractTwoNumbers(55, 19)))


// WITH GLOBAL VARIABLE CAN BE DANGEROUS
function substractTwoNumbers2(num1, num2){
    anotherVar1 = num1 - num2;
}
substractTwoNumbers2(15, 7);
// console.log(anotherVar1)
var first = anotherVar1; // updated global variable 1st time

substractTwoNumbers2(55, 19);
// console.log(anotherVar1)
var second = anotherVar1; // updated global variable 2nd time

substractTwoNumbers2(anotherVar1, anotherVar1); // there are the same argumenst
// console.log(anotherVar1) 

// substractTwoNumbers2(first, second);
// console.log(anotherVar1)

/***
 *  Pitfall of global variables in functions
 */
 function multiplyTwoNumbers2(num1, num2){
    anotherVar1 = num1 * num2;
}

substractTwoNumbers2(15, 7);
multiplyTwoNumbers2(5,15);
// console.log(anotherVar1);

/***********************************************************************************************************/

function isYourNameArnold(arg1){
    return arg1 === "Arnold";
}

// console.log(isYourNameArnold("Petra"));

// console.log(isYourNameArnold(11111));

function greetingCard(name){
    // var greetMessage = "Hello " + name + "! Welcome to our Academy and make sure you have fun!!!"
    //return greetMessage;
    //
    // or just simply use:
    return "Hello " + name + "! Welcome to our Academy and make sure you have fun!!!"
}


function greetThePerson(name){

    //var greet = greetingCard(name); + console.log(greet);
    // or just shortly this:
    console.log(greetingCard(name));
}

// greetThePerson("Patryk");
// greetThePerson("Katja");
// greetThePerson("Petra");
// greetThePerson("Michal");
// greetThePerson("Erik");


// Avoid using global variables as much as possible, however sometimes the best resot is to use it *RARE CASE*


var Patryk = ["Patryk", "Poland", "Warsaw"];
var Michal = ["Michal", "Slovakia", "Bratislava"];
var Petra = ["Petra" ,"Slovakia", "Bratislava"];
var Erik = ["Erik", "Slovakia", "Bratislava"];
var Katja = ["Katja", "Slovenia", "Ljubljana"];
var Arnold = ["Arnold", "Austria", "Vienna"];

function whereAreYouFrom(person){
    return person[0];
}

function whichOfficeAreYouWorkingFrom(person){
    return person[1];
}

// console.log("Erik is from " + whereAreYouFrom(Erik));
// console.log("Katja is working in " + whichOfficeAreYouWorkingFrom(Katja));

// Create function that prints out workplace or office of a person
var academyStudentsAndTeachers = [Patryk, Michal, Petra, Erik, Katja, Arnold];
console.log(academyStudentsAndTeachers);

function listOutPersonsAndOfficeLocation(studentsAndTeachers){
    for (let i = 0; i < studentsAndTeachers.length; i++){
        console.log(studentsAndTeachers[i][0] + " is working in " + studentsAndTeachers[i][2]);
    }
}

listOutPersonsAndOfficeLocation(academyStudentsAndTeachers);


