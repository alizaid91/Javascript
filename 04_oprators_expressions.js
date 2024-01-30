let a = 10;
let b = 2;

//arithmatic oprator
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);

//console.log("a++ = ", a++); //it will first print and then increase #34
//console.log("a = ", a); //#35
//console.log("++a = ", ++a); //it will first increse and then print #25

console.log(++a);
console.log(a++);
console.log(--a);
console.log(a--);
console.log(a);
console.log(a--);

//assignment oprator
let c = 1;
c += 5;
console.log("c is now = ", c);
c -= 5;
console.log("c is now = ", c);
c *= 5;
console.log("c is now = ", c);
c /= 5;
console.log("c is now = ", c);

//comparison oprator
let comp1 = 7;
let comp2 = "7";

console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);

//logical oprator
let e = 5;
let f = 7;

console.log(e < f && e == 7);
console.log(e < f || e == 7);
