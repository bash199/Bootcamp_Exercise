import React from "react";
import styled from "styled-components";
import {strinfFormat} from "../../utils/carMarketObjUtil";
const NavBar = styled.nav`
   width: 100%;
   height: fit-content;
   background: #777;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Div2 = styled.div`
   width: fit-content;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 600px) {
      flex-direction: column;
   }
`;
const Div3 = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   @media (max-width: 600px) {
      flex-direction: column;
   }
`;
const ButtonNav = styled.div`
   width: fit-content;
   padding: 0 10px 2px 10px;
   background: #b0c4de;
   border-radius: 5px;
   border: 1px solid darkblue;
   font-size: 1.2rem;
   margin: 10px;
   text-transform: capitalize;
   &:hover {
      background: #5b93d8;
      cursor: pointer;
   }
`;
const H2 = styled.h2`
   width: fit-content;
   cursor: pointer;
`;
const Nav = ({categories, setState}) => {
   const ButtonNavArr = categories.map((el) => {
      return (
         <ButtonNav key={el} onClick={() => setState(el)}>
            {strinfFormat(el)}
         </ButtonNav>
      );
   });
   return (
      <NavBar>
         <Div3>
            <div>
               <H2 onClick={() => setState("Wellcome to Car Market")}>
                  Car Market
               </H2>
            </div>
            <Div2>{ButtonNavArr}</Div2>
         </Div3>
      </NavBar>
   );
};

export default Nav;
