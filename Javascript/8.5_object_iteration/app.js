const obj1={
   name:'Bashir',
   Last:'Tarif',
   gender:'male',
   age:24,
   livesIn:'JulissBaby'
}
const obj2={};
const objectIteration=(obj)=>{
   for(let key in obj){
      obj2[obj[key]]=key;
   }
   return obj2;
}
console.log(objectIteration(obj1));