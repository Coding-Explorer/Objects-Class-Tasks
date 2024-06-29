//////////////PRACTICING TASKS//////////////.
//////////////ANONYMOUS FUNCTIONS//////////////.

console.log("\n WELCOME TO ANONYMOUS FUNCTIONS EXAMPLE PROGRAM BY RABI KHAN \n\t");

//Here's i'm gonna to Assign a function expression to a variable, with one parameter that executes the provided argument to the console.
const function1 = function(str: string) {
    console.log(str);
};

//Now calling the function function1 with the argument "Hello, Rabi khan".
function1("Hello, Rabi khan"); // Output :Hello, Rabi khan.

//Now Creating the same function as a normal function declaration
function function2(str: string) {
    console.log(str)
}

//Now Calling the normal function declaration with an argument "Hello again!".
function2("Hello again!"); // Output :Hello again!