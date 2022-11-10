import React, {useRef, useState} from "react";
import "./App.css";
import Nav from "./nav/Nav";
import Main from "./container/Main";
import {carMarket} from "../utils/carMarketObj";
const App = () => {
   const [state, setState] = useState(null)
   const setStringInMain = (str) => {
      setState((prev) => (prev = str));
   };
   const categories = Object.keys(carMarket);
   return (
      <>
      <div className="App">
         <Nav categories={categories} setState={setStringInMain}></Nav>
         <Main state={state} ></Main>
      </div>
      </>
   );
};

export default App;
