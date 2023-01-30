// //function oddNumbersInARange(num2,num1=0){
//     var myArray = [];
//     for(let i = num1; i <= num2; i++){
//         if (i % 2 != 0) {
//         myArray.push(i);
//         }
//     }
//     return myArray;
// }
// var OddNumbersResult = oddNumbersInARange(100,-20);
// console.log(OddNumbersResult);
​
​
​
​
function oddNumbersInARange(num1,num2){
    var myArray = [];
    for(let i = num1; i <= num2; i++){
        if (i % 2 != 0) {
        myArray.push(i);
        }
    }
    return myArray;
}
​
​
​
​
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
​
​
function OddnotPrimeNumbers(num1,num2){
    var PrimeNumbersResult = primeNumbers1To100(num1,num2);  
    var OddNumbersResult = oddNumbersInARange(num1,num2);
    let difference = OddNumbersResult.filter(x => !PrimeNumbersResult.includes(x));
    console.log(difference);
}
OddnotPrimeNumbers(1,100);
​