const array = ["Hello", "Good Day", "Your","Welcome", "hotdog", "hamburgers"];
// let str = array.toString().toLocaleLowerCase().replaceAll(',','').replaceAll(' ','');

let count={};
const func=(array)=>{
   let str = array.toString().toLocaleLowerCase().replaceAll(',','').replaceAll(' ','');
   for(let i=0; i<str.length;i++){
      if(count[str[i]]){
         count[str[i]]++;
      }
      else{
         count[str[i]]=1;
      }
   }  return count ;
}

console.log(func(array));
// console.log(count);
