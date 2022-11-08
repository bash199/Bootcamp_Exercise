import React, {useState} from 'react'
import './App.css';
import Form from './Component/Form';

const  App = () => {
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    select: null,
    textArea: null
 })
  const submitHandler = (data) =>{
    setState(prev=> {
      console.log(prev);
      return {...prev, ...data}
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form submitHandler={submitHandler}></Form>
      <div>{state.firstName}</div>
      <div>{state.lastName}</div>
      <div>{state.select}</div>
      <div>{state.textArea}</div>
      </header>
    </div>
  );
}

export default App;
