var addFriend = document.querySelector("#add");

addFriend.addEventListener("click", function () {
  addFriend.innerHTML = "Subscribed";
});

console.log(console);

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(typeof a);

const changeBgRed = () => {
  document.body.firstElementChild.firstElementChild.style.background =
    "crimson";
  document.body.firstElementChild.firstElementChild.style.padding = "5px";
  document.body.firstElementChild.firstElementChild.style.borderRadius = "15px";
};

let b = document.body;
console.log(b.firstChild);
console.log(document.body.childNodes[1].firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);
