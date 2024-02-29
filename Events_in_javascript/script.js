let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//   console.log(e);
//   document.body.style.backgroundColor = "black";
//   let btn = document.getElementsByTagName("button")[0];
//   btn.style.backgroundColor = "crimson";
//   btn.style.color = "white";
// };

//using EvenLlistener
let currMode = "light"
btn1.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark"
        document.body.style.backgroundColor = "black";
    }else {
        currMode = "light"
        document.body.style.backgroundColor = "white";
    }
});
