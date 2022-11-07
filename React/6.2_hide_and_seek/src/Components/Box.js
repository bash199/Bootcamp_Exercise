import React, {useState} from 'react';

const Box = ({clas}) => {

   const [status,setStatus] = useState(clas);

   const checkStatus = (string) => string === 'hide' ? 'show' : 'hide';     

   const clickHandler = () => setStatus(checkStatus);

  return (
    <div className='Box'>
      <button onClick={clickHandler} className='btn'>SHOW / HIDE</button>
      <div className = {status}></div>
    </div>
  )
}

export default Box