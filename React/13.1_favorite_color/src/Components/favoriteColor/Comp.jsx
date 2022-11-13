import React, {useState,useEffect} from 'react'

const Comp = () => {
const [favoriteColor,setFavoriteColor] = useState('red')
 useEffect(()=>{
   setTimeout(()=>{
      setFavoriteColor('blue')
   },1000)
},[favoriteColor])
  return (
   <div>
    <h1>
      My favorite color is {favoriteColor}
    </h1>
    <div id='div'></div>
   </div>
  )
}

export default Comp