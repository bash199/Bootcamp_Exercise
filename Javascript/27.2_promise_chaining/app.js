//? Write two functions that use Promises that you can chain.
//? The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error. Call the functions once with an array of words and call it once with an array that includes at least one item that is not a word. Print the resolve and reject in a .then, .catch


const myarr = 'Call the functions once with an array of words and call it once'
const myarr2 =myarr.split(' ');
// myarr2.push(1)
// console.log(myarr2);

function sortWords(arr){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(Array.isArray(arr)){
            let arr3 = arr.sort()
            resolve({arr3,status:200, code: 'resolved'})
         }
      },2000)
   })
};


const makeAllCaps = (arr) => {
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
         let allStrings = true;
         let arr2 = []
         for(let element of arr){
            if(typeof element !== 'string'){
               allStrings = false;
            }
            else{
               arr2.push(element.toUpperCase())
            }
         }
         if(allStrings && Array.isArray(arr)){
            resolve({status:200, code: 'resolved',arr2})
         }   
         else{
            reject({status:404, code: 'rejected'})
         }
      },2000);
   });
};

makeAllCaps(myarr2)
   .then((res) => {
      console.log(res.arr2);
      console.log(res.status);
      console.log(res.code);
      console.log('Array contains strings only');
      return sortWords(res.arr2)
   })
   .then((res)=>{
      console.log(res.arr3);
      console.log(res.status);
      console.log(res.code);
   })
   .catch((rej) => {
      console.log(rej.status);
      console.log(rej.code);
      console.log('Array contains element other than strings');
   })
