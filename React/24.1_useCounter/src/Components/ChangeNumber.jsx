import React from 'react'
import { useValue } from './App'
const ChangeNumber = () => {
   const [state, addOne, removeOne, double, divide]=useValue(5)
  return (
    <div>
      <button onClick={addOne}>addOne</button>
      <button onClick={removeOne}>removeOne</button>
      <button onClick={double}>double</button>
      <button onClick={divide}>divide</button>
      <h1>{state}</h1>
    </div>
  )
}

export default ChangeNumber