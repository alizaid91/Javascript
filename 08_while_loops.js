const ps = require("prompt-sync");
const prompt = ps();

//simple while loop
let num = 0;
while (num < 22) {
  console.log(num);
  num += 2;
}

//do while loopen
let n = 10;
let i = 0;
do {
  console.log(i);
  i++;
} while (i < n);
