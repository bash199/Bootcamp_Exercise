import React, {useState, useEffect,useRef} from "react";
import Input from "./input/Input";

function App() {
   const inRef = useRef()
   useEffect(()=>{
      setTimeout(() => {
         inRef.current.focus()
      }, 500);
   },[])
   return (<div className="App"><Input inRef={inRef}/>
   </div>);
}

export default App;
