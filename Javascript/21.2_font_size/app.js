// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size and clicking the ‘-‘ should decrease it. Limit the font size to be between 6px and 100px.

const p = document.querySelector('p');
const plus = document.querySelector('button[class=plus]');
const minus = document.querySelector('button[class=minus]');
let fontSize = 16;
// p.style.fontSize=`${fontSize}px`;
function plusFunction () {
   if(fontSize <100){
      p.style.fontSize=`${fontSize++}px`;
   }
};
function minusFunction () {
   if(fontSize >6){
      p.style.fontSize=`${fontSize--}px`;
   }
};

plus.addEventListener('click',plusFunction);
minus.addEventListener('click',minusFunction);




