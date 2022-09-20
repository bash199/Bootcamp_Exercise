// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
let myArr = [3,4,4,3,6,3];
let result=[];
for(let i=0; i<myArr.length;i++){
   if(result.indexOf(myArr[i])===-1){
      result.push(myArr[i]);
   }
}

console.log(myArr);
console.log(result);