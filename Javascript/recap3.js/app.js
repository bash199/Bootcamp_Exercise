/** (1)
  Create an input field and a button when the button is clicked 
  call  function that receives 'number' as a parameter (from input field) and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */

// //! Check yourself once with .then .catch and once with async await
// //! DRY
// //! Small functions
// const input = document.querySelector('#input')
// const button = document.querySelector('#submit')
// const h1 = document.querySelector('h1')

// function setEvents(){
//    button.addEventListener('click',()=>{
//       asyncFunc(input.value)
      // thenCatch(input.value)
//    });
// }
// setEvents()
// function getPromise(num){
//    if(num!==''){
//       return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//          num >= 17 ? resolve('You can drive') : reject("You're too young to drive")
//       }, 2000)
//       });
//    }
// }

// function thenCatch(num){
//    if(!num){
//       h1.textContent='Type Age!!!'
//       return;
//    }
//    getPromise(num)
//       .then((res)=>h1.textContent=res)
//       .catch((rej)=>h1.textContent=rej)
// }

// async function asyncFunc(num){
//    try{
//       if(!num) throw Error ('Type Age!')
//       const result = await getPromise(num)
//       h1.textContent=result
//    }
//    catch(err){
//       h1.textContent=err
//    }
// }


/** 2)
   create a car Market Object 
   fetch all data from the API and assign it to the carMarketObj
   add spinner to see that everything works
   and show message when done
   */

//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id: 

async function fetched(url){
   const result =await fetch(url);
   const data = await result .json();
}


