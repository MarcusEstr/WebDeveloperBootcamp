// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	answer = prompt("Are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");

//Version 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");