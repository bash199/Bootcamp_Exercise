let firstRed = document.querySelector('td[class="active"]');
const el = document.querySelector('tr[id="player2-race"]');
document.addEventListener('keyup',moveRight);
document.addEventListener('click',reset);
let firstYellow = el.firstElementChild;
let result = true;
//! restarts the game
function reset(){
   document.location.reload() 
};
//! Height order function that invokes three functions
function moveRight(event){
   let input = event.key;
   moveRedRaceCarRighr(input);
   moveYellowRaceCarRighr(input);
   checkWinner();
};
//! a function that check woh is the winner in each round
function checkWinner(){
   let Red=firstRed.getAttribute('class');
   let Yellow=firstYellow.getAttribute('class');
   let finAct = 'finish active';
   if(Red===finAct&&Yellow!==finAct&&result){
     alert('Red car win!!');
      result=false;
   }
   else if(Red!==finAct&&Yellow===finAct&&result){
      alert('Yellow car win!!');
      result=false;
   }
};
//! a function that moves the red car right each time a soecefic key id pressed, removes the class attribute from the current element and passes it to the next if it is not null.
function moveRedRaceCarRighr(input){
   let redFirNextSib = firstRed.nextElementSibling;
   if(input=='ArrowRight'){
      if(redFirNextSib!==null){
         firstRed.classList.toggle("active");
         firstRed = redFirNextSib
         firstRed.classList.toggle("active");
      }
   }
};
//! Same as the other function just this one is for the yellow car.
function moveYellowRaceCarRighr(input){
   let YellFirNextSib = firstYellow.nextElementSibling;
   if(input=='d'){
      if(YellFirNextSib!==null){
         firstYellow.classList.toggle("active");
         firstYellow=YellFirNextSib
         firstYellow.classList.toggle("active");
      }
   }
};





