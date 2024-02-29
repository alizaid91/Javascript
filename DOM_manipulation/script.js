// console.log(window)
// window.console.log("hello")
// document.body.childNodes[1].textContent = "Hello Ali Zaid"
// document.getElementById("heading").style.backgroundColor = "crimson"
// document.querySelector("h1").style.backgroundColor = "crimson"
// let element = document.querySelector("h1")
// console.log(element)
// console.dir(element)

let heading = document.body.querySelector("h2");
heading.append(" from Apna College");

//aam zindagi
// let divs = document.querySelectorAll(".box");
// divs[0].textContent = "New value 1"
// divs[1].textContent = "New value 2"
// divs[2].textContent = "New value 3"

// let divs = document.getElementsByClassName("box")
// divs[0].textContent = "New value 1"

//mentos zindagi
let divs = document.querySelectorAll(".box");

for (i = 0; i < divs.length; i++) {
  divs[i].textContent = `New value ${i + 1}`;
  //changing attributes
  //divs[i].setAttribute("class","my-class")
}

//creating a new element(button)
let btn = document.createElement("button");
btn.innerText = "click me!";

btn.style.padding = "10px";
btn.style.backgroundColor = "crimson";
btn.style.color = "white";
btn.style.borderRadius = "20px";

//inserting to in HTML dynamically
let position = document.body.getElementsByClassName("box")[1];
position.after(btn);
