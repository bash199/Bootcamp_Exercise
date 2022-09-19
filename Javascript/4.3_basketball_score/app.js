let johnScore1 = 89;
let johnScore2 = 120;
let johnScore3 = 103;
// ------------------
let mikeScore1 = 116;
let mikeScore2 = 94;
let mikeScore3 = 123;
// ------------------
let maryScore1 = 97;
let maryScore2 = 134;
let maryScore3 = 105;


function average(s1,s2,s3){
   let avg=Math.round(((s1+s2+s3)/3));
   return avg;
}

let johnavg = average( johnScore1,johnScore2,johnScore3);

let mikeavg = average( mikeScore1,mikeScore2,mikeScore3);

let maryavg = average( maryScore1,maryScore2,maryScore3);

if((johnavg>mikeavg) && (johnavg>maryavg)){
   console.log(`John's team WINS! and the average score is: ${johnavg}`);
}
else if((johnavg<mikeavg) && (maryavg<mikeavg)){
   console.log(`Mike's team WINS! and the average score is: ${mikeavg}`);
}
else if((johnavg<maryavg) && (mikeavg<maryavg)){
   console.log(`Mary's team WINS! and the average score is: ${maryavg}`);
}
else {
   console.log(`IT'S a draw, same average score!`);
}