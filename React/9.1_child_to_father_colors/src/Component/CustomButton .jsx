import React from 'react'

const CustomButton  = ({color,setState}) => {
  return (
    <button onClick={()=>setState(color)} >{color} </button>
  )
}

export default CustomButton 