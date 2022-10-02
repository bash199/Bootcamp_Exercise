const candyStore = {
   candies: [
   {
   name: "mint gum",
   id: "as12f",
   price: 2,
   amount: 2
   },
   {
   name: "twix",
   id: "5hd7y",
   price: 5,
   amount: 4
   },
   ],
   cashRegister: 200
};
// ?Implement the following getCandy function: The function should return the candy element with the specified id.

function getCandy(candyStore, id){
   let result = candyStore.candies.filter(candy =>{
      return candy.id.includes(id)
      
   });
   console.log(result);
   };
   getCandy(candyStore,'as12f');

//! with find method (find method return the object, on the other hand the filter method return the object in a new array).

function getCandy2(candyStore, id){
   let result2 = candyStore.candies.find(candy =>{
      return candy.id.includes(id)
      
   });
   console.log(result2);
};
getCandy2(candyStore,'as12f');
 
//? 2. Implement the following getPrice function: The function should return the price (number) of the candy with the specified id.

function getPrice(candyStore, id){
   const result = candyStore.candies.filter(candy =>{
      const price =candy.price;
      if(candy.id.includes(id)){
         console.log(price);
      }
   });
};
getPrice(candyStore,'5hd7y');
//? 3. Implement the following addCandy function:  The function should add a new candy to the candy list in candyStore with a default amount of 1. The function will not return anything

function addCandy(candyStore, id, name, price){

    const result  = candyStore.candies.filter(()=>{
      candyStore.candies.push({name:name,id:id,price:1});
      
      //*  console.log(arr)
    });
    console.log(candyStore.candies) 
    
};
addCandy(candyStore,'aa','kinder',2)

   
//?4. Implement the following buy function: The function should add the candy price to the cashRegister, and decrease the amount property of the relevant candy
 function buy(candyStore, id){
   const result  = candyStore.candies.find(candy=>{
      if(candy.id==id){
         candyStore.cashRegister += candy.price;
         candyStore.candies.amount=candy.amount-1;
      }
   });
   console.log(candyStore.cashRegister,candyStore.candies.amount);
};
buy(candyStore,'as12f')


