//? Write a function that has one argument, a positive integer.
//? Let's call it N.
//? The function should console log a step shape.
//? With N levels using the # character. Make sure the step has
//? spaces on the right-hand side if empty!

// const stepShape= (N) => {
//    for(let i=1; i<=N; i++){

//       console.log('#'.repeat(i));
//    }
// }

const stepShape= (N) => {
   for(let i=1; i<=N; i++){
      let str='';
      for( let j=1; j<=i; j++){
         str+='#';
      }  
      for(let k=1; k<=N; k++){
         if(str.length!=N){
            str+=' ';
         }
      }
      console.log(str,str.length);
   }
}
stepShape(3);