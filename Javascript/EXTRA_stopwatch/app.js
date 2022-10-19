const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const time = document.querySelector('h1');

let ms = 0;
let sec = 0;
let min = 0;
let foo ;

function upTime(){
   ms++;
   if(ms > 59){
      ms = 0;
      sec++;
      if(sec > 59){
         sec = 0;
         min++;
         if(min==60){
            clearTimeout(foo);
         }
      }
   }
}

function add(){
   upTime();
   time.textContent = `${(min > 9 ? min : '0' + min)} : ${(sec > 9 ? sec : '0' + sec)} : ${(ms > 9 ? ms : '0' + ms)}`;
   tmr();
}
function tmr(){
   foo = setTimeout(add, (1000 / 60));
}
function stp(){
   clearTimeout(foo);
}
function rst(){
   ms = 0;
   sec = 0;
   min = 0;
   time.textContent='00:00:00';
}

start.addEventListener('click',tmr);
pause.addEventListener('click',stp);
reset.addEventListener('click',rst);



