/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

// From function declarations to explicit and implicit
// return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
// reformated From function declarations to explicit
const welcome = () => {
   return 'Welcome to Appleseeds Bootcamp!';
}
// reformated From function declarations to implicit
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

// From function declarations to explicit and implicit
// return functions (one of each).
function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
// reformated From function declarations to explicit
const power = (a) => {
   return Math.pow(a, 2);
}
// reformated From function declarations to implicit
const power = (a) => Math.pow(a, 2);




// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) +
b;
// IIFE- immediately Invoke function expression 
(function ()  {
   console.log(Math.sqrt(a));
})();
// IIFE- immediately Invoke function expression Arrow.
(() => {
   console.log(Math.sqrt(a));
})()
