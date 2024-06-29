////////////////PRACTICING TASKS////////////.
/////////////CREATING CALCULATOR USING FUNCTIONS/////////////.

console.log("\n   Welcome to the Calculator Program BY RABI KHAN! \n\t");
//Here's i'm gonna to Set up two variables containing number values.
const num1:number = 15;
const num2:number = 5;

//Now Setting up a variable to hold an operator (+ or -).
let operator = '+';

//Now Creating a function that takes two numbers and an operator as parameters, performs the corresponding operation, and returns the result
function calculate(num1: number, num2: number, operator: string): number {
    return operator === '+' ? num1 + num2 : num1 - num2  ;
}

//Now Calling the function and seeing the output/results.
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));

//Now Updating the operator value and see how the function works with different operators.
operator = '-';

//Finally Calling the function again with updated arguments and operator along with seeing the output/results.
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));
