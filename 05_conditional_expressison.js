const ps = require("prompt-sync");
const prompt = ps();

let age = prompt("Enetr your age: ");
//prompt take any input form user and convert it into string and store it into variable

if (age < 0) {
  console.log("Invalid age!");dddd
} else if (age < 9) {
  console.log("You are a kid you cant drive!");
} else {
  console.log("You are above 18 you can drive!");
}

//ternary oprator
console.log("You can drive", age < 18 ? "Not drive" : "dive");
