// const form = document.querySelector('#form');
const random = document.querySelector('#random');
// const guess = document.querySelector('#input-guess');
const result = document.querySelector('#result');
const fill = document.querySelector('#fill');
const appear = document.querySelector('#play-again');
let guessedLetters=[];
let randomLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let status = true;
let index = Math.floor(Math.random()*26)-1;
let letter = randomLetters[index];
appear.style.display='none';
function guessMyLetter(event){
   let input = event.key.toLowerCase();
   checkLetter(input,letter)
   addsToTheGuessedArray(input)
}

function addsToTheGuessedArray(i){
   if(randomLetters.includes(i)){
      if (!guessedLetters.includes(i)){
         guessedLetters.push(i)
         if(status){
            fill.textContent = guessedLetters.join(',')
         }
      }
   }
}

function checkLetter(char,l){
   if(randomLetters.includes(char)&&status){
      if(l===char&&status){
         result.style.color='green';
         result.textContent="Yep that's the right letter";
         // guess.style.display='none'
         random.textContent=char;
         status = false;
         appear.style.display='block';
      }
      else if (guessedLetters.includes(char)&&status){
         result.style.color='blue';
         result.textContent='already used this letter';
      }
      else{
         result.style.color='red';
         result.textContent="nope, that's wrong letter";
      }
   }
   else if(!randomLetters.includes(char)){
      result.style.color='yellow';
      result.textContent="Only valid letters!";
      
   }
}

appear.addEventListener('click',()=>{document.location.reload()})
document.addEventListener('keyup',guessMyLetter)
// document.addEventListener('keyup',()=>{
//    console.log(event.key);
// })