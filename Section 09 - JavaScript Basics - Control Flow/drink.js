var age = prompt("What is your age?");


if (age < 0) {
	alert("Error. Negative age provided.");
} else if (age == 21) {
	alert("Happy 21st birthday!!");
} else if (age % Math.sqrt(age) === 0) {
	alert("Perfect square!");
} else if (age % 2 == 1) {
	alert("Your age is odd!");
} else {
	alert("nothing");
}