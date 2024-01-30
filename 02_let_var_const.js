//we can declare variable without var, const, let,
//we should use 'const' most of time
console.log("Javascript");
var a = "ali";
console.log(a);
var a = 41; // we can update.

{
  let a = "zaid";
  console.log(a);
  //let a = 34; 'let' is a block scoped variable we can not redeclare it
}

console.log(a);

const name = "ali";
//let name = "zaid" const is a block-scoped variable we can not redeclare it
