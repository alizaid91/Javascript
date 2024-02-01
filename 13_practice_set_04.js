const ps = require("prompt-sync");
const prompt = ps();

//Q02. string method startsWith() , endsWith()
str = "Hello my name is Ali Zaid";
console.log(str.startsWith("a"));
console.log(str.endsWith("d"));

//Q3. write a program to convert a string into lower case

function lower_case(string) {
  console.log(string.toLowerCase());
}

given_str = prompt("Enter a string: ");
lower_case(given_str);

//Q04.

let my_str = "Pleas give Rs 1000";
let amount = my_str.slice("Please give Rs".length);
console.log(amount);

console.log(my_str.replace(my_str[4], "l"));
