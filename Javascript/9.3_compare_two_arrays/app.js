//? Create a function that takes these two arrays as
//? arguments.
//? Compare these two arrays using 2 for loops and return the
//? items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
const compare = (arr1,arr2) => {
let result=[];
   for(let el1 of arr1){
      for(let el2 of arr2){
         if(el1==el2 ){
            result.push(el1)
         }
         
      }
   }
   result.length==0 ?  console.log(false) : console.log(result);
}

console.log(compare(food,food1));




