//Array map method
let arr = [45, 18, 81];
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);

//Array filter method
let arr2 = [45, 78, 14, 1, 0, 44];
let a2 = arr2.filter((a) => {
  return a > 10;
});
console.log(a2);

//Array reduce method
let arr3 = [1, 2, 3, 4, 6, 8, 1];
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarr3, typeof arr3);
