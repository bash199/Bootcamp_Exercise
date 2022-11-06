import React from 'react'
import Child from './Child'
const kids= [
  { name: 'Ori', color: 'red' },
  { name: 'Ron', color: 'blue' },
  { name: 'Sigalit', color: 'green' },
  { name: 'Ruti', color: 'yellow' },
  { name: 'Alon', color: 'purple' },
]
function Mother() {
  const childrenArr = kids.map(kid=>{
      return <Child color={kid.color} name={kid.name}></Child>
  })
  return (
    <div className='Mother'>
      <h1>A Tale of Five Balloons.</h1>
      {childrenArr}
    </div>
  )
}

export default Mother;