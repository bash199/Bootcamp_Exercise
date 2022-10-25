//? Write a function that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
//? If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
//? Call the function and print the resolve and reject in a .then, .catch.




const printResAndRej = (num) => {
   return new Promise((resolve,reject) =>{
      setTimeout(() => {
      const n = num ;
      if(n < 10){
         reject({status:404, code: 'rejected'})
      }
      else{
         resolve({status:200, code: 'resolved'})
      }
   
      },2000);
   })   
};

printResAndRej(10)
   .then((res) => {
      console.log(res.status);
      console.log(res.code);
      console.log('The  number is greater than 10.');
   })
   .catch((rej) => {
      console.log(rej.status);
      console.log(rej.code);
      console.log('The  number is less than 10.');
   })