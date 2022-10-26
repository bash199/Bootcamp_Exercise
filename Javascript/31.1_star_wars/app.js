let myArr = [];
async function getFetch(){
   const fetched = await fetch('https://swapi.dev/api/people')
   if(!fetched.ok){
      throw new Error ;
   }
   console.log(fetched);
   return fetched;
}

async function getData(){
   try {
      const result = await getFetch()
      const data = await result.json()
      fun(data.results)
   } catch (error) {
      console.log(error);
      console.log('SOMTHING WENT WRONG!!!!!');
   }
}
let myArr2=[];

function fun(data){
   const arr = data 
   for(let el of arr){
      fetch(el.homeworld)
      .then(res => {
         const data = res.json()
         // console.log(data);
         return data
      })
      .then(res=>{
         myArr2.push({
            name: res.name,
            population: res.population
         })
      })
      .catch((rej)=>{
         console.log(rej);
         console.log('somthing wnet wrong');
      })
   }
   myArr2.reverse()
   for(let el of arr){
      myArr.push({
         name: el.name,
         height: el.height,
         hair: el.hair_color,
         planet: ''
      })
   }
   for(let i=0;i<myArr.length;i++){
      myArr[i]['planet'] = myArr2[i]
   }
}

let res = myArr.map((ppl, index) => {return  Object.assign({}, ppl, myArr2[index])});
//* 1. Name ; name
//* 2. Height ; height
//* 3. Hair Color ; hair_color
//* 4. The planet they came from ; homeworld
//* 5. Planet population ; homeworld.population
