import React from "react";
import Grandson from "./Grandson";

const Son = () => {
   return (
      <div>
         Son
         {console.log("Son")}
         <Grandson />
      </div>
   );
};

export default Son;
