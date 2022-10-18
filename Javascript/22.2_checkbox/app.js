//? Create a webpage that has a checkbox. If the checkbox is checked, make a photo appear. If it is not, make it disappear.
const check = document.querySelector('#term');
const submit = document.querySelector('#submit');
const form = document.querySelector('#form');
const body = document.querySelector('body');
form.addEventListener('submit',(event)=>{
   if(check.checked){
      body.style.backgroundImage="url('img.jpg')"
      body.style.color='pink'
   }
   else{
      body.style.backgroundImage=""
      body.style.color='black'
   }
   event.preventDefault()
})









