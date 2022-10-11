//? 1.1- Basic loop
// You are given this array:
const words = ['one', 'two', 'three', 'four', 'five'];
// Loop over this array with the forEach method and console log each
// element and its index.
words.forEach((e,i)=>{
   // console.log(`${e}:${i}`);
});

//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.
const ToNumber = (array)=>{
   let arr =[];
   array.forEach((el)=>{
      switch(el){
           case 'one':
            arr.push(1)
            break;
        
         case 'two':
            arr.push(2)
            break;

         case 'three':
            arr.push(3)
            break;   
        case 'four':
            arr.push(4)
            break;
        case 'five':
            arr.push(5)
            break;
         default :
            arr.push('bob')
        };  
   });
   return arr;
};
console.log(ToNumber(words));

//? 1.3-Fruits
// You are given this array of fruits:
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.
fruits.forEach((el)=>{
   el != 'apple' ? console.log(`I am eating a ${el}`) : console.log(`I am eating an Apple`)
});

//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third
// argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.
numbers.forEach((el,i,arr)=>{
  arr[i]=el*2;
});
console.log(numbers);

