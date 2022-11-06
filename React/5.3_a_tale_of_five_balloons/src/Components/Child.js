import React from 'react'
import Ballon from './Ballon'
function Child({name,color}) {
  return (
    <div className='Child'>
      <h3>{name}</h3>
      <Ballon color={color}></Ballon>
    </div>
  )
}

export default Child