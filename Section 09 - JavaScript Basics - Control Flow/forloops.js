console.log("Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("Print all even between 10 and 40");
// for (var i=10; i < 41; i+=2) {
// 	console.log(i);
// }
for (var i = 10; i < 41; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

console.log("Print all odd between 300 and 333");
// for (var i=301; i < 334; i+=2) {
// 	console.log(i);
// }
for (var i = 301; i < 334; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}


console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (var i=5; i<51; i++) {
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}