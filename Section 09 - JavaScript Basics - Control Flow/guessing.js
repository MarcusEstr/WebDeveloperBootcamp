//Create secretNumber
var secretNumber = 4;

//Ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//Check if guess is right
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
} else if (guess > secretNumber) { //check if guess is higher
	alert("Too high. Guess again!");
} else {
	alert("Too low. Guess again!");
}