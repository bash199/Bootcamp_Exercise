/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/

// From function declarations to function expressions
   function welcome() {
      let welcome = 'Welcome to Appleseeds Bootcamp!';
      return welcome;
   }
   // reformated the function from declarations to expression.
   const welcome = function() {
      return 'Welcome to Appleseeds Bootcamp!';
   }


   // From function declarations to function expressions
   function power(a) {
   let myNumber = a;
   let result = Math.pow(myNumber, 2);
   return result;
   }
   // reformated the function from declarations to expression.
   const power = function(a){
      return (Math.pow(a,2));
   }


   // From function declarations to function expressions
   function add(a, b = 5) {
   let myNumber = a;
   let sum = myNumber + b;
   return sum;
   }
   // reformated the function from declarations to expression.
   const add = function(a){
      return a + 5 ;
   }


   // From function expressions to function declarations
   const hello = () => "Hello!";
   const squareRoot = a => Math.sqrt(a);
   const randomNumbers = (a, b) => Math.random() * (a - b) +
   b;

   // reformated the function from expression to declarations.
   function hello(){
      let greet= 'Hello!';
      return greet;
   }

   function squareRoot(a){
      let square = Math.sqrt(a);
      return square;
   }

   function randomNumbers(a, b){
      let random = Math.random() * (a - b) + b ;
      return random ;
   }








console.log(hello());