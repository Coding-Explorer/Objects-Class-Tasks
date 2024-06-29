///////////////TASK 03////////////////.
/*Design a type alias named Employee to represent an employee object with properties like
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if
any)*/
//Now Creating an example of employee object.
var employee1 = {
    name: "Rabi khan",
    department: "Technology Services",
    role: "Intern",
    contact: {
        phone: +923262266909, //Random number just for example usage.
        email: "abcdef@gmail.com" //Random email just for example usage.
    },
    skills: ["Typescript", "Javascript", "Python"]
};
console.log(employee1);
