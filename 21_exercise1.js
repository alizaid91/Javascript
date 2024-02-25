const ps = require("prompt-sync");
const prompt = ps();

//Guess the number code
let x = Math.floor(Math.random() * 100 + 1);
i = 0;

do {
  number = prompt("Guess a number between 1-100: ");
  i += 1;
  if (number > x) {
    console.log("lower Please!\n");
  } else if (number < x) {
    console.log("Higher Please! \n");
  }
} while (number != x);

console.log("You Guessed the Right Number in", i, "Attempts!");
