import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>srcs/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://appleseeds.org.il/?gclid=Cj0KCQjwqoibBhDUARIsAH2OpWjUSpajpoDuJSbYvpC1u3h6SmeOvt5jZU1cuVulNXOFoZvIA9eAT_QaApzyEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
