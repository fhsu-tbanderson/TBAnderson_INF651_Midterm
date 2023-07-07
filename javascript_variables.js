//Question 1: Declare a variable called name and assign it a string value of your
//choice. Then, display a message that says "Hello, [name]!" using the value of the
//name variable.
let name = "Tyler";

console.log(`Hello, ${name}!`);

//Question 2: Create two variables, x, and y, and assign them numerical values.
//Swap the x and y values using a third variable and display the updated values

let x = 45, y = 77;

console.log(`The current value of x is ${x}, the value of y is ${y}.`); //I used console.log to display a message, but can also use alert

let z = 0;

z = x;
x = y;
y = z;

console.log(`Values have been swapped.\nThe current value of x is: ${x}, the value of y is ${y}.`);
