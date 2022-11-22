import React, {createContext, useState} from "react";
import styled from "styled-components";
import GrandFather from "./GrandFather";
const AppBox = styled.div`
   background-color: #282c34;
   min-height: 100vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
   text-align: center;
`;
export const ctxArr = createContext({state: [], setState: null});
const App = () => {
   const [state, setState] = useState([]);
   return (
      <AppBox>
         <ctxArr.Provider value={{state, setState}}>
            <GrandFather />
         </ctxArr.Provider>
      </AppBox>
   );
};
export default App;
