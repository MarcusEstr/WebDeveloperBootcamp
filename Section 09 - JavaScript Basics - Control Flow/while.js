console.log("PRINTING ALL NUMBERS BETWEEN -20 AND 19");
var counter = -10;

while (counter < 20) {
	console.log(counter);
	counter++;
}

var counter = 10;
console.log("PRINTING ALL NUMBERS BETWEEN 10 and 40");
while (counter < 41) {
	console.log(counter);
	counter+=2;
}

// while (counter < 41) {
// 	if(counter % 2 === 0) {
// 		console.log(counter);
// 	}
// 	counter+=1;
// }

var counter = 300;
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 330");
while (counter < 331) {
	if(counter % 2 !== 0) {
		console.log(counter);
	}
	counter+=1;
}

var counter = 5;
console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 AND BETWEEN 5 and 50");
while(counter < 51) {
	if(counter % 5 ===0 && counter % 3 === 0) {
		console.log(counter);
	}
	counter+=1;
}
