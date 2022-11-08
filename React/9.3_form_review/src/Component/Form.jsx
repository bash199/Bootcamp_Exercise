import React from 'react'

const Form = ({submitHandler}) => {
   const [firstNameVal, setfirstNameVal] = React.useState('')
   const [lastNameVal, setlastNameVal] = React.useState('')
   const [selectVal, setselectVal] = React.useState('')
   const [textAreaValues, settextAreaValues] = React.useState('')
   
   const changeHandler = (event) =>{

      const val = event.target.value
      const id = event.target.id
      switch (id) {
      case 'firstName':
        setfirstNameVal((prev) => prev=val);
        break;
      case 'lastName':
        setlastNameVal((prev) => prev=val);
        break;
      case 'select':
        setselectVal((prev) => prev=val);
        break;
      case 'textArea':
        settextAreaValues((prev) => prev=val);
        break;
      default:
        break;
    }
   }
   
   const getData = () => {
      return {
         firstName: firstNameVal,
         lastName: lastNameVal,
         select: selectVal,
         textArea: textAreaValues
      }
   }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      submitHandler(getData())
    }}>
      <input type='text' id='firstName' value={firstNameVal} onChange={changeHandler}/>
      <input type='text' id='lastName' value={lastNameVal} onChange={changeHandler}/>
      <select id='select' value={selectVal} onChange={changeHandler}>Gender
         <option value='Male'>Male</option>
         <option value='Female'>Female</option>
         <option value='Other'>Other</option>
      </select>
      <textarea id='textArea' value={textAreaValues} onChange={changeHandler}></textarea>
      <button type='submit'>Continue</button>
    </form>
  )
}

export default Form