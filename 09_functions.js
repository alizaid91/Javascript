const ps = require("prompt-sync");
const prompt = ps();

function square(num) {
  console.log("Squre is: ", num * num);
}

num = prompt("Enter a number: ");
square(num);

//arrow function
const sum = (p, q) => {
  return p + q;
};

num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");

num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);

console.log("Sum is: ", sum(num1, num2));
sum(1, 2);
