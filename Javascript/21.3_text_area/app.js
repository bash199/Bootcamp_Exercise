//? Create a webpage that has part of the application process for a job. This page should have a text area field and a button. Your user must enter at least 100 characters before clicking the button. If he didn’t, please give him the appropriate message. (using alert is forbidden ) 
const btn = document.querySelector('button');
const textArea = document.querySelector('textarea[type="textarea"]');
const p = document.querySelector('p');
const messagge = ()=>{
   if(textArea.value.length < 10){
      p.textContent='At least 100 chars'
      p.style.color='red'
   }   
   else{
      p.textContent='Good Job!'
      p.style.color='green'
      textArea.value=''
   }
}
btn.addEventListener('click',messagge);

