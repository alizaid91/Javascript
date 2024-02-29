let a = document.getElementsByTagName('div')[0]
let h1 = document.createElement('h1');
b = prompt("Enter your Name: ")
h1.innerHTML = `${b}`;
a.appendChild(h1);

document.getElementsByTagName("h1")[0].style.display = "inline"
