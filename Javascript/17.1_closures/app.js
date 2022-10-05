//? Without running the code below, explain in your own words what the result of each block of code will be and why.

//* Block 1

var b = 1;

function someFunction(number) {

   function otherFunction(input) {
      return b; // b → 5
   };

   b = 5;//       ↑    ↑

   return otherFunction; //! will return b as 5 because it takes it from its parent which is  someFunction. and the argument that the otherFunction takes it is irrelevant for its returned value .
};

var firstResult = someFunction(9); //!  in firstResult will be stored the someFunction and its value (which is a function ).

var result = firstResult(2); //! In  result will be stored the value 5 because the otherFunction returned b as 5 which someFunction will return too 5 which got from otherFunction, and here also someFunction the argument that it got it is irrelevant because it is not assigned to anything yet.


//* Block 2

var a = 1;

function b2() {

   a = 10;

   return ;
   
   function a() { };
};

b2();

console.log(a);

//* Block 3

let i;
for ( i = 0; i < 3; i++) {

   const log = () => {

   console.log(i);

   };

   setTimeout(log, 100);
   
};





