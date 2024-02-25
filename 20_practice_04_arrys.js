const ps = require("prompt-sync");
const prompt = ps();

nums = [12, 4];

let b = prompt("How many numbers you want to add to array: ");
for (let i = 1; i <= b; i++) {
  a = prompt("Enter Number: ");
  a = Number.parseInt(a);
  a = a * a;
  nums.push(a);
}
console.log(nums);

//Problem 05
let arr = [1, 2, 3, 9, 4];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
