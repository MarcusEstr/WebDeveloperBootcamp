function getEven(x){
  if (x % 2 === 0) {
	return true;
  } else {
	return false;
  }
}

//or, shorter
function isEven(num) {
	return num % 2 === 0;
}

function factorial(x) {
	var result = 1;

	for (var i = 1; i <= x; i++) {
	result *= i;
	}
	return result;
}

function kebabToSnake(string) {
	var newString string.replace(/-/g, "_");
	return newString;
}