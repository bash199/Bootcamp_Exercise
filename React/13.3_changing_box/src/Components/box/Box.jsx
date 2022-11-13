import React, {useState, useEffect} from "react";
import styled from "styled-components";
const Div = styled.div`
   width: 100px;
   height: 100px;
   margin: auto;
`;
const Box = () => {
   const colors = ["red", "black", "yellow", "blue", "green"];
   const [color, setColor] = useState(null);
   const [circle, setCircle] = useState(null);
   const [i, setI] = useState(0);
   useEffect(() => {
      if (i < 5) {
         setTimeout(() => {
            setColor(colors[i]);
            setI((prev) => ++prev);
         }, 500);
      } else {
         setCircle("50%");
      }
   }, [color]);

   return <Div style={{background: color, borderRadius: circle}}></Div>;
};

export default Box;
