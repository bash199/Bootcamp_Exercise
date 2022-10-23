//? Question 1:
//? In your own words what will this point to and why?
//? (Note this is the global scope)
// console.log(this);
// * this will be the window because it is in the global . so this is referring to the window 

//? Question 2:
//? a. In your own words what will this point to and why?
//? b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// greet() {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();
//* this will point to the  window because arrow functions does not get a their own this, to fix we will replace the arrow function to declaration function.


//? Question 3:
//? In your own words what will this point to and why?
// const myFuncDec = function () {
// console.log(this);
// };
// myFuncDec()
//* againg this will point to the window becauce the invocation is from the window and so on this will refer to the window, like question 1.

//? Question 4:
//? In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();
//* againg this will point to the window because the invocation is from the window like question 3 ignoring what kind of function.


//? Question 5:
//? a. In your own words, what will this point to and why?
//? b. How can you fix this code?
document.querySelector(".element").addEventListener('click',function a(){console.log(this);});
//*  this will point to the window because of the arrow function..., to fix it we can by replacing the arrow function by declartion function.
