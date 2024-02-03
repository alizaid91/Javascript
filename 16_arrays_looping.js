let num = [1, 4, 5, 67, 99, 12, 6];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//forEach loop ==>
num.forEach((element) => {
  console.log(element * element);
}); //this will print the square of each element in the array

//Array.from
let myname = "Ali Zaid";
let arr = Array.from(myname);
console.log(arr); //this will convert the above string into array

//for...of loop ==>
for (let item of myname) {
  console.log(item);
}

//for...in loop ==>
for (let i in myname) {
  console.log(myname[i]);
}
