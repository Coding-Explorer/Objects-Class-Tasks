/////////////////TASK 01/////////////////.
/*Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named 
horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
engine's horse*/

//Here is the solution.
//Type alias for Car.
type Car = {
    engine:{
      horsepower:number
    }  
    getHorsepower:()=>number
  }
  //Nested object within Car.
  //function getHorsepower() returns the horsepower of the car.
  //Use of arrow function for better readability.
 const car:Car= {
      engine:{
          horsepower: 600,
      },
      getHorsepower:() => car.engine.horsepower
  }
  //Finally calling the function getHorsepower() to get the horsepower of the car. 
  //and printing it on the console.

  console.log("Car Horsepower:",car.getHorsepower());
