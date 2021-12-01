// Variable = promptFunction
var playerName = window.prompt("What is your robot's name?");
console.log(playerName);

// console.log examples
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// String Concatenations
console.log("Our robot's name is " + playerName);
console.log("omniBot" + " is ready for battle!");
console.log(playerName + " is ready for battle!");
console.log("Your robot, " + playerName + ", has won!");

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

// Call for function^^
// fight();