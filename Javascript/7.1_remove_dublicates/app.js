// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
let myArr = [3,4,4,3,6,3];
let result=[];
let c ={};
for(let i=0; i<myArr.length;i++){
   if(result.indexOf(myArr[i])===-1){
      result.push(myArr[i]);
      c[myArr[i]]=0;
   }
   else if(myArr.indexOf(myArr[i])!==-1){
      c[myArr[i]]=+1;
   }
}

console.log(myArr);
console.log(result);
console.log(c);