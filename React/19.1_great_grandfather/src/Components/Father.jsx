import React, {useContext, useEffect} from "react";
import {ctxArr} from "./App";
import Son from "./Son";

const Father = () => {
   const {setState} = useContext(ctxArr);
   useEffect(() => {
      setState(["Xbox", "PC", "PS"]);
   }, [setState]);
   return (
      <div>
         Father
         {console.log("Father")}
         <Son />
      </div>
   );
};

export default Father;
