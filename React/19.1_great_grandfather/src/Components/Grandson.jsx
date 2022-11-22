import React, {useContext} from "react";
import {ctxArr} from "./App";

const Grandson = () => {
   const {state} = useContext(ctxArr);
   return (
      <div>
         Grandson
         {console.log("Grandson")}
         <div>
            Grandson's Gifts:
            {state.map((el) => {
               return <h3 key={el}>{el}</h3>;
            })}
         </div>
      </div>
   );
};

export default Grandson;
