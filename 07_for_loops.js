const ps = require("prompt-sync");
const prompt = ps();

let sum = 0;
let n = prompt("Enter a number you want the upto: ");
n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
  sum += i + 1;
}

console.log(sum);

let m = prompt("Enter a number: ");
m = Number.parseInt(m);

for (let i = 1; i < 11; i++) {
  console.log(m, "X", i, "=", m * i);
}

let p = prompt("Enter first number: ");
let q = prompt("Enter second number: ");
p = Number.parseInt(p);
q = Number.parseInt(q);

for (p = p; p < q + 1; p++) {
  console.log(p);
}

//for in loop
let obj = {
  ali: 12,
  shiv: 15,
  zaid: 19,
  shubh: 29,
};

for (let a in obj) {
  console.log(a);
}

//for of loop
for (let b of "Ali Zaid") {
  console.log(b);
}
