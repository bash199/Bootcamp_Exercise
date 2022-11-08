import React , {useState} from 'react'

const Chekbox = ({checked, label}) => {
   const [state, setState] = useState(checked)
      const clickhandler = () => {
          setState(!state)
      }
  return (
   <div>
      <input onChange={clickhandler} type='checkbox' checked={state}/>
      <label>{label}</label>
   </div>
  )
}

export default Chekbox