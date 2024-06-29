/////////////PRACTICING TASKS////////////////.
/////////////Miles-to-Kilometer converter//////////////////. 

console.log("\n WELCOME TO THE MILES-TO-KILOMETER CONVERTER BY RABI KHAN \n\t");

//Here's the first task, we're going to convert miles to kilometers.
//Here's firstly i'm Creating a variable "miles" and assigning a numeric value to it.
let miles = 150;

//Now Calculating distance in kilometer using conversion factor let's see how it works.
let kilometers = miles * 1.60934;

//Finally Printing the message to the console with the converted distance.
//The usage of backticks instead of quotation marks to make the code more readable.
//The usage of toFixed() method to limit the decimal places to 3.
console.log(`The distance of ${miles} miles is equal to ${kilometers.toFixed(3)} kilometers.`);