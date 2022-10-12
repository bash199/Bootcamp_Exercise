//? Create a webpage that has an input field for the user’s age and a button. If the user enters a number above 18, make the text “you can drink” appear. If the user enters a number below 18, make the text “you’re too young” appear.

const btn = document.querySelector('button');
const input = document.querySelector('input');
const span = document.querySelector('.span');

btn.addEventListener('click',function(){
   if(Number(input.value)>=18){
     span.innerHTML='you can drink';
     
  }
  else{
     span.innerHTML="you're too young";
  }

}) 

