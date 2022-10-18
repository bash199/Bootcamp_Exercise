//? Create a webpage that has a form (asks the user for its name, age, and email address) and when the user clicks submit, open a text window that writes all the information and asks for his confirmation. If he clicks on the confirm button, tell him“congratulations you successfully sent this form” if he clicks on change information, give him the possibility to change the information, and ask again for his confirmation.


const form = document.querySelector('.form');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const para = document.querySelector('#demo');
const submitBtn = document.querySelector('.submit');

// const formobj = {};

form.addEventListener('submit',type);

function type (event){
   let text ='';
   for(let item of [name,age,email]){
      text += `${item.name}: ${item.value}\n`
   }
   if(confirm(text)){
      para.innerHTML = 'congratulations you successfully sent this form';
      event.preventDefault()
   }
   else{
      for(let item of [name,age,email]){
         item.value='';
      }
      event.preventDefault()
   }

}












