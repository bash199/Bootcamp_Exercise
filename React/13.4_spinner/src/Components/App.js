import React, {useState, useEffect} from "react";
import Spinner from "./spinner/Spinner";

function App() {
   const arr = ["spinner0", "spinner1", "spinner2"];
   let random = Math.floor(Math.random() * 3);

   const [timer, setTimer] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setTimer((prev) => !prev);
      }, 3000);
   }, []);
   return <div className="App">{timer && <Spinner cls={arr[random]} />}</div>;
}

export default App;