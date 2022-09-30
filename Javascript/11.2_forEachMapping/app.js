//! Answer the questions below and use the map or the forEach method :
//? 1. Write a function called doubleValues which accepts an array of integers and returns a new array with all the values in the array passed to the function doubled.
let myArr =[1,2,3,4,5,6,7,8,9,10];
const doubleValues=(array)=>{
   let result = array.map(function (e) {return ( e * 2 );});
   console.log(result);
};
doubleValues(myArr);
//? 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.
let myArr2 = [1,2,3,4,5,6,7,8,9,10] ;
const onlyEvenValues = ( array ) => {
   let result2 = [] ;
   array.map(function (e) {
      if ( e % 2 == 0) { return result2.push(e) } ;
   });
   console.log(result2);
};
onlyEvenValues(myArr2)

//? 3. Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with only the first and last elements from the function’s argument array. The returned array should only contain elements that are strings.
let myArr3 = [1,'noo',3,'boo',5,'shoo',7,8,'foo','fdfdsfg',10,[1,5]];
const showFirstAndLast = (array) => {
   let result3 = [] ;
   let result31 = [] ;
   array.map(function (e) {
      if((typeof e) == 'string'){
         result3.push(e);
      }
   });
   result3.map(function (e,i){
      if ( i===0 ){
         result31.push(e);
      }
      if ( i === (result3.length-1)){
         result31.push(e);
      }
   });
   console.log(result31);
};
showFirstAndLast(myArr3);

//? 4. Write a function called vowelCount which accepts a string as an argument. The function should return an object which has the count of the number of vowels that are in the string. The key should be the vowel and the value should be the count. e.g. {a:3, o:2,u:4}. Should not be case-sensitive.
let str = 'boB haS some wAssaBi in hIs pocket' ;
const vowelCount = (string) => {
   let array = string.toUpperCase().replaceAll(' ','').split('');
   let count={};
   array.map(function (e){
      if(count[e]){
         count[e]++;
      }
      else{
         count[e]=1;
      }
   });
   console.log(count);
};
vowelCount(str);

//? 5. Write a function capitalize that takes a string as an argument and will return the whole string capitalized.
let str2 = 'boB haS some wAssaBi in hhKIRGh hIs pocket' ;
const capitalize = (string) => {
   let array = string.split(' ');
   let str1 = '' ;
   array.map(function (e) {
      str1 += e.toUpperCase();
      str1 += ' ' ;
   });
   console.log(str1);
};
capitalize(str2);

//? 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter shifted down the alphabet by one.
let str3 = 'ACDEF';
const shiftLetters = (string) =>{
   let array = string.split('');
   let array2 = [] ;
   array.map(function (e,i) {
      array2.push(String.fromCharCode(e.charCodeAt()+1));
   });
   console.log(array2.join(''));
} 
shiftLetters(str3);

//? 7.Create a function called swapCase that takes a string as an argument and returns a string that every other word is capitalized. (you can use the fifth’s exercise's function to (keep it dry).
let str4 = 'bob has some wassabi in his pocket' ;
const swapCase = (string) => {
   let array = string.split(' ');
   let str5 = '' ;
   array.map(function (e,i) {
      if(i==0||i%2==0){
         str5 += e.toUpperCase();
         str5 += ' ' ;
      }
      else{
         str5 += e;
         str5 += ' ' ;
      }
   });
   console.log(str5);
};
swapCase(str4);
