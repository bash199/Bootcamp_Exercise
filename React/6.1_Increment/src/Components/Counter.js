import React,{useState} from 'react'
import './Counter.css'

const Counter = ({currNumber}) => {
   const [number,setNumber] = useState(currNumber) 
   const increment=()=>{
        setNumber(number + 1)
   }
  return (
   <div className='Counter'>
      <button onClick={increment}>increment</button>
      <div>{number}</div>
   </div>
  )
}

export default Counter