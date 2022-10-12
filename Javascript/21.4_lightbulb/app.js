// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned
// on, clicking it again will turn it off

const img = document.querySelector('img');
function turnOff(){
   if(img.src.includes('lightOn.png')){
      img.src='lightOff.png';
   }
   else{
      img.src='lightOn.png';
   }
}
img.addEventListener('click',turnOff);

