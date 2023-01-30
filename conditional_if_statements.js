// Conditional statements are: once a condition is fulfilled, code will execute the part under that section

// IF STATEMENT

// plain If
function isItTrue(val){
    var ourValue = "";
    if (val == 12) {
        ourValue = "It is true";
    }

    return ourValue;
}
// console.log(isItTrue(12));


// IF - ELSE statement
function isItTrueIfElse(val){
    let ourValue = "";
    if (val == 12) {
        ourValue = "It is true!";
    } else {
        ourValue = "NO! It is false!";
    }

    return ourValue;
}
// console.log(isItTrueIfElse(44));

// 
function isItTrueBoolean(arg){
    if (arg) {
        console.log("Yes!");
    } else {
        console.log("Nope!")
    }
}
// isItTrueBoolean(false);

// isItTrueBoolean(1+1 == 2);
// isItTrueBoolean("Randome string"); // DANGER MAKE SURE YOU KNOW THIS!!! It is always true
// isItTrueBoolean(1); // DANGER MAKE SURE YOU KNOW THIS!!! It is always true


// if with single specific conditions
function anotherBelowAboveFunc(arg){
    if (arg < 5){
        console.log("It is less than 5");
    } else if (arg < 10) {
        console.log("It is less than 10 but above or equal 5");
    } else {
        console.log("It is more than or equal to 10");
    }
}
// anotherBelowAboveFunc(4);
// anotherBelowAboveFunc(8);
// anotherBelowAboveFunc(21);


// IF - IF ELSE - ELSE state
// if with multiple conditions
function isItBelowTenOrFive(arg){
    if (arg < 10 && arg >= 5){
        console.log("It is less than 10");
    } else if (arg < 5) {
        console.log("It is less than 5");
    } else {
        console.log("It is greater or equal than 10");
    }
}
// isItBelowTenOrFive(9);
// isItBelowTenOrFive(5);
// isItBelowTenOrFive(12);

// if with single specific conditions
 // Here we  don't check negative numbers properly
function anotherBelowAboveFunc(arg){
    if (arg < 15 && arg >= 0){
        console.log("It is less than 15 but above or equal to 0");
    } else if (arg < 30 && arg >= 15) {
        console.log("It is less than 30 but above or equal to 15");
    } else if (arg < 50 && arg >= 30) {
        console.log("It is less than 50 but above or equal to 30");
    } else if (arg < 75 && arg >= 50) {
        console.log("It is less than 75 but above or equal to 50");
    } else if (arg < 100 && arg >= 75) {
        console.log("It is less than 100 but above or equal to 75");
    } else {
        console.log("It is more than or equal to 100 OR a negative number"); // Here we  don't check negative numbers
    }
}
// anotherBelowAboveFunc(99);
// anotherBelowAboveFunc(49);
// anotherBelowAboveFunc(8);
// anotherBelowAboveFunc(101);
// anotherBelowAboveFunc(456);
// anotherBelowAboveFunc(-50);


// Nested IF statements
function nestedIfStatement(arg){
    if (arg >= -10 && arg < 0) {
        // console.log("It is a negative number");
        if (arg > -5){
            console.log("It is greater than -5 but less than 0");
        } else {
            console.log("It is less or equal than -5 but greater or equal than -10");
        }
    } else if (arg < -10){
        if (arg > -20){
            console.log("It is greater than -20 but less than -10");
        } else {
            console.log("It is less or equal than -20");
        }
    } else {
        if (arg < 15 && arg >= 0){
            console.log("It is less than 15 but above or equal to 0");
        } else if (arg < 30 && arg >= 15) {
            console.log("It is less than 30 but above or equal to 15");
        } else {
            console.log("It is greater or equal to 30");
        }
    }
}
// nestedIfStatement(12);
// nestedIfStatement(50);
// nestedIfStatement(-6);
// nestedIfStatement(-15);
// nestedIfStatement(-25);


// some easier example
function myNestedIfsRangeZerTo15(arg){
    let output = "Our value: " + arg + " is ";
    if (arg >= 0 && arg <= 15){
        if (arg >= 5 && arg <= 10){
            console.log(output + "in between 5 and 10  \n");
        } else if (arg < 5){
            console.log(output + "less than 5  \n");
        } else {
            console.log(output + "in between 11 and 15 \n")
        }
    // } else if (typeof arg == "undefined"){
    //     console.log("No argument specified \n");
    }   else {
        console.log(output + "Out of range or not correct input \n");
    } 
}
// myNestedIfsRangeZerTo15(4);
// myNestedIfsRangeZerTo15(8);
// myNestedIfsRangeZerTo15(14);
// myNestedIfsRangeZerTo15(16);
// myNestedIfsRangeZerTo15(-5);
// myNestedIfsRangeZerTo15(11);
// myNestedIfsRangeZerTo15(5);
// myNestedIfsRangeZerTo15(0);
// myNestedIfsRangeZerTo15(10);
// myNestedIfsRangeZerTo15(15);
// myNestedIfsRangeZerTo15();  // this will return "undefined" for arg and pass with correct condision
// myNestedIfsRangeZerTo15("15");  // this will be "in between 11 and 15" because not strict comparison in the conditions
// myNestedIfsRangeZerTo15("test"); // this will return "test" for arg and pass with correct condision

// To avoid invalid inputs narrow down to type using the "typeof" check
function myNestedIfsRangeZerTo15WithTypeCheck(arg){
    let output = "Our value: " + arg + " is ";
    // Narrow down = don't allow EMPTY/undefined and String values
    if (typeof arg != "undefined" && typeof arg != "string"){
        // do you magic with other types
    } else {
        console.log("Wrong input type");
    }
}

// or allowing only one type of input
function myNestedIfsRangeZerTo15WithOnlyNumbers(arg){
    // Allow ONLY types of number and bigint
    if (typeof arg == "number" || typeof arg == "bigint"){
        console.log("this is only number");
        // do you magic
    } else {
        console.log("Not a number type in inout")
    }
}

// EXCERCISE = do some test with "typeof" values (undefined, number, bigint, function, string, boolean)

function typeCheckIfStatement(arg){
    // do your magic, check types and print out message accordingly
}

// WHAT WILL THESE RETURN AS TYPE?
// typeCheckIfStatement(1);
// typeCheckIfStatement("bla bla");
// typeCheckIfStatement(addTwoNumbers(12,4)); // will it return type function or return type number?
// typeCheckIfStatement(true);