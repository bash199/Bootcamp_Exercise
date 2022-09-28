//? 1. Write a function called ‘isString’ that receives 2 arguments,
//? a string and a callback function. The function checks that
//? the string is indeed a string. If the string is a string, pass
//? the string to a callback function that logs that string to the
//? console.
const isString = (str, func) =>{
   if((typeof str)==='string'){
      func(str)
   }
}

const funcs=(str)=>{
   console.log(str);
}

isString('kkkk',funcs)

//? 2. Create a function called ‘firstWordUpperCase’ that
//? receives 2 arguments, a string and a callback function.
//? The function will capitalize the first word in the sentence
//? and pass the string to a callback function which will create
//? dashes between the words.

const firstWordUpperCase=(str,func)=>{
   let str1=str.split(' ');
   let word = str1[0].toLocaleUpperCase();
   str1.shift();
   str1.unshift(word);
   str1=str1.toString()
   func(str1);
}

const replace=(str)=>{
   let str2=str.replaceAll(',', '-' );
   console.log(str2);
}

//? 3. Call the ‘firstWordUpperCase’ function with a callback of
//? your choice.

firstWordUpperCase('asd kjh jhj etrgh',replace);


//? 4. Create your own function that will receive from one of its
//? arguments a callback function.
const bio=(str,func)=>{
   console.log(str);
   func(str);
   func(str);
}


const zoo=(str)=>{
   console.log(str);
   console.log(str);
}
bio('zomba',zoo)
