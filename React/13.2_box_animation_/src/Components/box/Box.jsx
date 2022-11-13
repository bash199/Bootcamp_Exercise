import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Div = styled.div`
   width: 100px;
   height: 100px;
   margin: 10px;
   background: red;
   position: relative;
   animation: mymove 5s;
   @keyframes mymove {
      from {
         left: -250px;
      }
      to {
         left: 400px;
      }
   }
`;
const Box = () => {
   const [show, setShow] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         console.log("1 sec passed");
         setShow(true);
      }, 1000);
      return () => {
         setTimeout(() => {
            console.log("1 sec passed");
            setShow(false);
         }, 4000);
      };
   }, []);
   return (
      <div>
         {show && <Div />}
         {show && <Div />}
         {show && <Div />}
         {show && <Div />}
      </div>
   );
};

export default Box;
