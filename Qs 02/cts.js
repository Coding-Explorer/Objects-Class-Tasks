//////////////////TASK 02/////////////////.
/* Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object
should have two properties:
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function
accepts a new color string as an argument. When called, it should:
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g.,
increase by 10% for red, decrease by 5% for blue)*/
var product = {
    name: "Nike T-shirt",
    price: 6000,
    color: "Black",
    inventory: {
        stock: 34,
        colorOptions: ["white", "red", "yellow", "green"],
        changeColor: function (newColor) {
            product.color = newColor;
            //Now Adjusting the price according to the new color.
            if (newColor == 'red') {
                //Now increment the price by 10% if red is selected.
                product.price += product.price * 0.1;
            }
            else if (newColor == 'white') {
                //Now increased the price by 15% if black is selected.
                product.price += product.price * 0.15;
            }
            else if (newColor == 'green') {
                //Now decreases the price by 4% if green is selected.
                product.price -= product.price * 0.04;
            }
            else if (newColor == 'yellow') {
                //Now decreases the price by 20% if yellow is selected.
                product.price -= product.price * 0.2;
            }
            else {
                // if color is not present in the list.
                console.log("".concat(newColor, " color is not available"));
            }
            console.log("Your Product Price is Changed To ".concat(product.price));
        }
    }
};
console.log(product.inventory.colorOptions);
//Now changing the color to red.
product.inventory.changeColor('red');
