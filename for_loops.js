// Loops are blocks of code that will or can be executed multiple times;
// declare a variable:
var global;
// initialise the variable:
global = 1;

// declare AND initialise the variable:
var globalTwo = 1;


// for (expression1; expression2; expression3){
        // 1st step: expression1 - executed, initialised Start

        // 2nd step: if (expression2) {  execute code here...  }
        // 3rd step: execute expression3 - increment, decrement, value change like example x += 2

        // 4th step: if (expression2) {  execute code here...  }
        // 5th step: execute expression3 - increment, decrement, value change like example x += 2

        // .. 

        // repeat steps 2 and 3 UNTIL expression2 == true
        // exit  when expression2 == false

        // in other words explained...
        // repeat this code:
        // let i = 1;
        // if (i <= 5) {  execute some code here.. };
        // i++;
        // THIS IS A FOR LOOP SINGLE ITERATION STEP
// }


function simpleForLoopCound1to5(){
    for (let i = 1; i <= 5; i++){
        // start from i = 1 ===> initial value to compare, and for loop is working from this on, not resetting the initial value
        // compare condition
        // if (i <= 5){
        console.log("Our number is: " + i);
        // }
        // last thing that happes in for loop ===>  i++
    }
    console.log("We are done");
}

// simpleForLoopCound1to5();


// We want to print out all odd numbers between 1 and 15
function oddNumbersBetween1And15(){
    for(let i = 1; i <= 15; i++){
        if (i % 2 != 0) {
            console.log("Result is: " + i);
        }
    }
}
// oddNumbersBetween1And15();


// Print out prime numbers between 1 and 100
// Prime numbers: numbers that are divisible only by 1 and themself = 1, 2, 3, 5, 7....

// 4 = not a prime because can be divided by 2
// 8 = not a prime because can be divided by 2 and 4 
// 6 = not a prime because can be divided by 2 and 3
// ...
// we will use NESTED FOR LOOPS
function primeNumbers1To100(){
    let prime;
    for(let i = 1; i <= 100; i++){
        prime = true;
        for(let j = 2; j < i; j++){
            // we check is the number "i" divisible for any values between 2 and "i"
            if (i % j == 0){
                prime = false;
                break;
            }
        }
        if (!prime){
            console.log(i + " is not a prime number")
        } else {
            console.log(i + " is a prime number")
        }
    }
}
primeNumbers1To100();


// EXCERCISE 1:
// Print out all prime numbers for a range of numbers in format:
// In this range between X and Y there are Z prime numbers and they are: 1, 2, .........
// hint: store the prime numbers in ARRAY ;)


// EXCERCISE 2:
// Print out all ODD numbers for a range of numbers in format:
// IF the odd number is Prime number as well, then SKIP IT - do not print out
//
// example odd numbers are 9, 15, 21 .... 105 ... 

function primeNumbers1To100(min, max){
    let myArray = [];
    let prime;
    for(let i = min; i <= max; i++){
        prime = true;
        for(let j = 2; j < i; j++){
            // we check is the number "i" divisible for any values between 2 and "i"
            if (i % j == 0){
                prime = false;
                break;
            }
        }
        if (!prime){
           
        } else {
        myArray.push(i);
        }
        
    }
    return myArray;
}
console.log (primeNumbers1To100(3, 50));

