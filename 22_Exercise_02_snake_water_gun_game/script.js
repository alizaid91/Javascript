function createRandomString(length) {
    const chars = "SWG";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
user = prompt("Enter Snake(S) , Water(W) , Gun(G)!") //asking user S,W,G
computer = createRandomString(1) //generating random S,W,G

document.write("You choosed " + user)
document.write(" & Computer choosed " + computer)

if (user == computer){
    document.write(" Tie!")
}

else if(user == "S" & computer == "G" | user == "W" & computer == "S" | user == "G" & computer == "W"){
    document.write(" You Lose!")
}
else if(user == "S" & computer == "W" | user == "W" & computer == "G" | user == "G" & computer == "S"){
    document.write(" You Win!")
}
