// 1. Fill an array with 100 of the same object using the array fill
// method
const obj ={name:'Bashir'}
const myArr = new Array(100).fill(obj);


// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
let myArr2=new Array(100);
myArr2= Array.from({length: 100}, (e, i) => {return i +1
});
// console.log(myArr2);
// 3. Convert only *values* of an object into one array. (not keys(name:,last:)...)
const person = {
   name: 'Bashir',
   last: 'Tarif' ,
   height: 1.87 ,
   weight: 99
}
let arr5=Object.values(person);
//! console.log(arr5);

// 4. Convert an array into one object.
let arr1= ['a','b','c','d','e','f','g','h']
let obj1 =Object.assign({},arr1);
//! console.log(obj1);
let obj2={...arr1}
//! console.log(obj2);
// 5. Find out if an array is an array.
Array.isArray(arr1);
// 
// ● Create a copy of an array that won’t affect the original array if modified.
let arr2 = arr1.slice(arr1)  ;



// ● Create a copy of an array that will affect the original array if modified.
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let arr4 = arr3;
arr4.pop();
//! console.log(arr3);




