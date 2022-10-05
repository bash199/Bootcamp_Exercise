//? Without running the code below, explain in your own words what the result of each block of code will be and why.
//? If there are any faulty outputs, please write on how we can fix them.
// //* Block 1
//!the log of 'a' will log undefined because JS initialize  'a' as undefined for var 'a',
//! the log foo() will log → 2 because JS sort of takes all the  functions to the top of the
//! code page and initialize them with their value. the key is to initialize before the log.
// function funcA() {
   
//    console.log(a);
//    console.log(foo());
//    var a = 1;
//    function foo() {
//    return 2;
//    };
// };

// funcA();

//* Block 2
// //! 
// var fullName = 'John Doe';
// var obj = {
//    fullName: 'Colin Ihrig',
//    prop: {
//       fullName: 'Aurelio De Rosa',
//       getFullName: function () {
//       return this.fullName;
//       }
//    }
// };
// console.log(obj.prop.getFullName()); //? Aurelio De Rosa
// var test = obj.prop.getFullName; //? function {} ,, getFullName: function () {return this.fullName;},undefined,
// console.log(test); //? unknown function,
// console.log(test())

// //* Block 3
// function funcB() {
//    let a = b = 0;
//    a++;
//    return a;
// };

//  funcB(); //? a=1, '            '   
// console.log(typeof a); //? 'a' NOT defined 
// console.log(typeof b); //? 'b' NOT defined 
// console.log(funcB())
// //* Block 4
// function funcC() {
//    console.log("1");
// };

// funcC(); //2

// function funcC() {
//    console.log("2");
// };

// funcC();//2

// //* Block 5
// function funcD1() {
//    d = 1;
// };

// funcD1();

// console.log(d);//1

// function funcD2() {
//    var e = 1;
// };

// funcD2();

// console.log(e);//1

//*Block 6
// function funcE() {
// console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// var x = 10;
// console.log(x);
// if (true) {
// var x = 20;
// console.log(x);
// }
// console.log(x)