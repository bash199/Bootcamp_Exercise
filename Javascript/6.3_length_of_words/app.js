let myArr=[]
let arra=["boo", "doooo", "hoo","ro"]

const func= (array)=>{
   for(let i=0; i<array.length;i++ ){
      myArr.push(array[i].length);
   }
   return myArr;
}

console.log(func(arra));


