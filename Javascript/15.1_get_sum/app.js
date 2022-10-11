//? # Note: We ask you NOT to solve the bug by finding it with your eyes but to use the debugging tools we've learned! 
//?What is wrong with this code?
//? 1. First, find the line that contains the problem. Write it down.
//? 2. Which debug method did you use to find the bug?
//? 3. Explain the bug in your own words.
//? 4. Fix the code and submit it all
//! 1. the line that contains is line 18. 
//! 2. I used the breakPoint debug method to find out the problem.
//! 3. there is no comma in the between the arguments in the getSum function so the the arguments are undefined, and sum variable is initialized as const which cant be changed, and we need it as let to sum the arrays.
//! 4.getSum([1,2,3],[5,66,23]); ..., tp put comma ' , ' and,change sum from const to let,and then runs like b a bee.
function getSum(arr1, arr2){
   let sum = 0; //* const changed to let.
   for (let i=0; i < arr1.length; i++){
   sum += arr1[i];
   };
   for (let i=0; i < arr2.length; i++){
   sum += arr2[i];
   };
   
};
    getSum([1,2,3],[5,66,23]); //* comma added.
.