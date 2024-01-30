const ps = require("prompt-sync");
const prompt = ps();

//Q1. using logical oprator finding age is between 10 and 20
let age = prompt("Enter your name: ");

if (age > 10 && age < 20) {
  console.log("yes,age is in between 10 and 20");
} else {
  console.log("No, Age is not in between 10 and 20");
}

//Q2. switch case statement
let number = prompt("Enter number: ");
switch (number) {
  case "12":
    console.log("You number is 12");
    break;
  case "13":
    console.log("Your number is 13");
    break;
  case "14":
    console.log("Your number is 14");
    break;
  case "15":
    console.log("Your number is 15");
    break;
  default:
    console.log("Your number is not spacial");
    break;
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

//Q5. driving code using ternary oprator
let age2 = prompt("Enter your age: ");
let a = age2 > 18 ? "You can drive" : "You cannot drive";
console.log(a);
