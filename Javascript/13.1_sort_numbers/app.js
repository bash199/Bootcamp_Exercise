const numbers = [1, -5, 666, 2, 400, 11];
//? 1. Sort the array of numbers from descending to ascending order.

numbers.sort((a,b)=> b-a)
console.log(numbers);
numbers.sort((a,b)=> a-b)
console.log(numbers);
console.log('↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓');
//? 2. Sort the array of numbers from ascending to descending order.
numbers.sort((a,b)=> a-b)
console.log(numbers);
numbers.sort((a,b)=> b-a)
console.log(numbers);
