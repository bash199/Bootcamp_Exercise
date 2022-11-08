import React, {useState} from 'react'

const Count = ({num}) => {
  const [number, setNumber] = useState(num)
  const [color, setColor] = useState('black')
    const checkStatus=(n)=>{
      if(n == 0) setColor('black')
      else if (0 > n) setColor('red')
      else if(0 < n) setColor('green')
      return n 
    }
    const increment = () => setNumber(prevVal => prevVal < 10 ? checkStatus(prevVal + 1 ) : 10);
    const decrement = () => setNumber(prevVal => prevVal > -10 ? checkStatus(prevVal - 1 ) : -10);
  return (
    <div className='Count'>
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <label style={{color:color}}>{number}</label>
    </div>
  )
}

export default Count