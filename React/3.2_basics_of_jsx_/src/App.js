import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"];
  const num1 = 5;
  const num2 = 6;
  const string = "I love React!"

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Q1: {data[0]} {data[1]}</div>
        <div>Q2: {num1} + {num2} = {num1 + num2}</div>
        <div>Q3: {string.length} letters</div>

      </header>
    </div>
  );
}

export default App;
