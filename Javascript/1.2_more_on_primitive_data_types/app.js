/*--Delete the wrong answers--
1. Which of the following is/are strings?
a) 4   
b) 4.0  
c) '4'- string

2. Which of the following is/are numbers?
a) 4- number
b) 4.0 -number
c) '4'
d) -4- number

3. Which of the following is/are booleans?
a) true -boolean
b) false- boolean
c) "true"- string

4. What is the result of 80 + 71.2?
a) 151.2 - result
b) 151
c) 8071.2

5. What is the result of "80" + 71.2?
a) 151.2
b) 151
c) "8071.2" -result 

6. Does 100 + 30 produce a number or a string?
a) number - produce a number
b)string

7. Does "100" + 30 produce a number or a string?
a)number 
b)string -  produce a string
*/
//-----------------------------------
//------Submit your answers under the
//question------//
//create three different ways to declare variables
var variable1  = 1 ;
let variable2  = 1 ;
const variable3  = 1 ;
//declare a variable and reassign a value to it
let number ; 
number = 5;

//create a variable and after that assign a string
//with its value being: He's got it!
let str1 ;
str1 = "He's got it";

/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let bill = 250 ;
let tax = 1.7 ;
let totalBill = 0 ;
totalBill= bill * tax;
console.log( "Your total bill is: "+ totalBill +"$");

// Round the number 50.6 to its nearest integer
//Create a variable that is undefined
let num = 50.6;
console.log(Math.round(num));


