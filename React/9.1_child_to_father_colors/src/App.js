import React, {useState} from 'react'
import './App.css';
import CustomButton from './Component/CustomButton '
function App() {
  const colors = ["blue","red","yellow"];

  const [state,setState] = useState('')
  const render = (arr) => {
    return arr.map((el,i)=>{
      return <CustomButton setState={setState} key={el + i} color={el}></CustomButton>
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        {render(colors)}
        <h3>The color Selected is: {state}</h3>
      </header>
    </div>
  );
}

export default App;
