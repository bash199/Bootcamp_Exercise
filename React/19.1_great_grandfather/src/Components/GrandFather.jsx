import React from "react";
import Father from "./Father";
const GrandFather = () => {
   return (
      <div>
         {console.log("GrandFather")}
         GrandFather
         <Father />
      </div>
   );
};

export default GrandFather;
