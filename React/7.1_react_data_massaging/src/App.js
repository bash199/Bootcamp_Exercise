import React, {useState} from 'react'
import './App.css';


const data = [ {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
  },
}, {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
}, {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
  },
}, {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
}, },
{
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
}, },
];

function getElProperties (arr) {
  return arr.filter((obj)=>{
    const year =obj.birthday.split('-')[2]
    return year<1990?obj:null
  })
}

// function getElname (arr){
//   return arr.map((obj)=>{
//     return obj.name
//   })
// }



function CardsArr (obj){
  const [first, setfirst] = useState((data))
  //map----------
    return <Card
    items={first} setfirstFunc={setfirst}></Card>
  
}

function Card (obj) {
  obj.setfirstFunc((prev)=>{
    return getElProperties(prev)
  })

return obj.items.map((personEl)=>{
   return (
     <div>
       <h1>{personEl.name}</h1>
       <span>food:{personEl.favoriteFoods.meats[0]}</span>
     </div>
   )
  })
}

// function renderNamesToCard(arr){
//   return arr.map((el,i)=>{ 
//     return <Names key={el.name +i} item={arr}>
//     </Names>
//   })
// }

function App() {


  return (
    <div className='App'>
      <CardsArr></CardsArr>
    </div>
  )
}



export default App