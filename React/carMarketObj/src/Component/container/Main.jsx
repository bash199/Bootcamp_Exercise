import React from "react";
import styled from "styled-components";
const MainDiv = styled.div`
   width: 100%;
   height: 90vh;
`;
const ContentDiv = styled.div`
   width:calc( 100% - 40px );
   height: 100%;
   padding:20px ;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   font-size:2rem;
   text-transform: capitalize;
`;
const Main = ({state}) => {
   return (
      <MainDiv>
         <ContentDiv>
         {state}
         </ContentDiv>
      </MainDiv>
   );
};

export default Main;
