var ageInput = prompt("How old are you?");

daysAlive = ageInput * 365.25; //Accounting for leap year (which is every 4 years)

alert(ageInput + " years is roughly " + daysAlive + " days");