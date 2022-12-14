getData()
const myArr = [];
async function getData(){
   try {
      const ppldata = await fetch('https://swapi.dev/api/people')
      const result = await ppldata.json()
      const pplArray = result.results;
      for(let i=0;i<10;i++){
        const plansetData = await fetch(pplArray[i].homeworld)
        let planetsArr= await plansetData.json()
        const {name,height,hair_color} = pplArray[i]
        const planet = {
            name: planetsArr.name,
            population: planetsArr.population
         }
         myArr.push({
            name: name,
            height: height,
            hair: hair_color,
            planet: planet
        })
      }
      makeTable()
   } 
   catch (error) {
      console.log(error);
      console.log('SOMTHING WENT WRONG!!!!!');
   }
}

function makeTable(){
const res = myArr.map((el)=>{
   return `<tr>
      <td>${el.name}</td>
      <td>${el.hair}</td>
      <td>${el.height}</td>
      <td>${el.planet.name}</td>
      <td>${el.planet.population}</td>
   </tr>`;
}).join("");

const table = document.createElement("table");
table.innerHTML = "<tr><th>name</th><th>hair</th><th>height</th><th>planet name</th><th>planet population</th></tr>";
table.innerHTML += res;
document.body.appendChild(table);
}

