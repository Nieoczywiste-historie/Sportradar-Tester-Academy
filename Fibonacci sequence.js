// // Fibonacci sequence

// function fibonacci(num){
//     var a = 1, b = 0, c;
//     while (num >= 0){
//       c = a;
//       a = a + b;
//       b = c;
//       num--;
//     }
//     console.log (b);
//   }
//   fibonacci(1);
// //Fizzuzz 

function FizzBuzzRangeXtoY(num1, num2){
    for (var i = num1; i<= num2 ; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

}


// FizzBuzzRangeXtoY(2, 30);

//Classes
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.speed = 0;
  }
  brake(num) {this.speed = this.speed-num};
  honk() {console.log(this.name + " honk honk")};
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
let Donkey = new Car("VW", 2004);

//myCar1.speed = 180
myCar1.honk();
myCar2.honk();
Donkey.honk = console.log("have a good day");
