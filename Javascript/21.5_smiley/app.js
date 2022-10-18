// Create a webpage with one field and one button. The user can choose the number of smileys, and you have to make them appear on the screen. If the user enters an input that is not a number show him an error message.
const btn = document.querySelector('button');
const input = document.querySelector('input');
const smileContainer = document.querySelector('.smileContainer');
let SCLength =document.querySelector('.smileContainer').children;
btn.addEventListener('click',addSmiley);
function addSmiley (){
   smileContainer.innerHTML='';
   if(Number(input.value)){
      for (let i = 0; i < Number(input.value); i++) {
         smileContainer.append(createSmiley())
      }
   }
   else{
      smileContainer.innerHTML='INVALID';
   }
};
function createSmiley (){
   const  image = document.createElement('img')
   image.setAttribute('src','smiley.png')
   return image
}