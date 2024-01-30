const ps = require("prompt-sync");
const prompt = ps();

//Q1. using logical oprator finding age is between 10 and 20
let age = prompt("Enter your name: ");

if (age > 10 && age < 20) {
  console.log("yes,age is in between 10 and 20");
} else {
  console.log("No, Age is not in between 10 and 20");
}

//Q3,Q4. program to find whether the give number is divisible by 2 and 3
let num = prompt("Enter a number: ");

if (num % 2 == 0 && num % 3 == 0) {
  console.log("Given number is divisible by 2 and 3 both!");
} else if (num % 2 == 0 && num % 3 != 0) {
  console.log("Number is divisible by 2 but not divisible by 3!");
} else if (num % 3 == 0 && num % 2 != 0) {
  console.log("Number is divisible by 3 but not divisible by 2!");
} else {
  console.log("Number is nither divisible by 2 nor 3! ");
}

//Q5. deiving code
let age2 = prompt("Enter your age: ");

if (age2 < 0) {
  console.log("Invalid age!");
} else if (age2 < 18) {
  console.log("You can not drive!");
} else {
  console.log("You can drive!");
}
