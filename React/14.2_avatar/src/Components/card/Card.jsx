import React from "react";
import styled from "styled-components";
import Avatar from "../avatar/Avatar";
const Div = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
`;
const Cards = ({val, inputSearch}) => {
   const insertPeople = () => {
      let filteredArr = val;
      if (inputSearch) {
         filteredArr = val.filter((el) => {
            return el.name.toLowerCase().includes(inputSearch);
         });
      }
      return filteredArr.map((user) => {
         return (
            <Avatar
               key={user.key}
               name={user.name}
               img={user.picture}
               country={user.country}
               phone={user.phone}
            />
         );
      });
   };

   return <Div>{insertPeople()}</Div>;
};

export default Cards;
