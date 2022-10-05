//? Write the following functions using the reduce built-in function.
//? 1. max----------------------------

let arr1 = [1,2,3,558,4,5,6,7,50285,8,9,10]
let sum1 =arr1.reduce((acc, cur) =>{
   return Math.max(acc,cur)
});
console.log(sum1)

console.log('↑↑↑-max-↑↑↑');
console.log('▬▬▬▬▬▬▬▬▬▬▬');
console.log('↓↓↓-sum-↓↓↓');

//? 2. the sum of even numbers---------------

let arr2 = [1,2,3,4,5,6,7,8,9,10]
let sum2 =arr2.reduce((acc, cur) =>{
   if( (cur % 2)===0){
      return acc + cur;
   }
   return acc;
},0);
console.log(sum2);

console.log('▬▬▬▬▬▬▬▬▬▬▬');

//? 3. average----------------------

console.log('↓↓↓-average-↓↓↓');

let arr3 = [1,2,3,4,5,6,7,8,9,10]
let sum3 =arr3.reduce((acc, cur) =>{
   return acc + cur/arr3.length
},0);

console.log(sum3)
