// 1. Fill an array with 100 of the same object using the array fill
// method
let myArr = new Array(100);
myArr.fill(1,0,100);
console.log(myArr);
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
let myArr2=[];
myArr2= Array.from({length: 100}, (v, i) => i);
console.log(myArr2);
// 3. Convert only values of an object into one array. 
const person = {
   name: 'Bashir',
   last: 'Tarif' ,
   height: 1.87 ,
   weight: 99
}
console.log(Object.entries(person));

// 4. Convert an array into one object.
let arr1= [['name','Bashir'],['last','Tarif'],['height','1.87'],['weight','99']]
console.log(Object.fromEntries(arr1));

// 5. Find out if an array is an array.
console.log(Array.isArray(arr1));

// ● Create a copy of an array that won’t affect the original array if modified.
let arr2 = arr1.slice(arr1)  ;
arr2.shift();
console.log(arr1);
console.log(arr2);
// ● Create a copy of an array that will affect the original array if modified.
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let arr4 = arr3;
arr4.pop();
console.log(arr3);



