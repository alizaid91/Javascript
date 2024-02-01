const ps = require("prompt-sync");
const prompt = ps();

//program to print marks of student stored in object using for loop
//mathod 1
/*let marks = {
  umar: 78,
  ali: 90,
  shivani: 80,
  farhan: 88,
  rancho: 77,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("Marks of", Object.keys(marks)[i], "is", Object.values(marks)[i]);
}*/

//method 2
let marks = {
  umar: 78,
  ali: 90,
  shivani: 80,
  farhan: 88,
  rancho: 77,
};

for (let key in marks) {
  console.log("Marks of", key, "is", marks[key]);
}

//Q2. guess the number
let number = 17;
let i = 0;
while (i != number) {
  console.log("Try again!");
  i = prompt("Enter a number: ");
}
console.log("You have Entered a correct number");
