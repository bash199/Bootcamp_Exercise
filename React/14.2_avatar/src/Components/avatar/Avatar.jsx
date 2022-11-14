import React from "react";
import styled from "styled-components";
import AvatarCountry from "./AvatarCountry";
import AvatarName from "./AvatarName";
import AvatarPhone from "./AvatarPhone";
import Image from "./Img";
const Div = styled.div`
   width: 200px;
   height: 200px;
   margin: 10px;
   padding: 5px;
   border: solid black 2px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Avatar = ({img, name, country, phone}) => {
   return (
      <Div>
         <AvatarName name={name} />
         <Image img={img} />
         <AvatarCountry country={country} />
         <AvatarPhone phone={phone} />
      </Div>
   );
};

export default Avatar;
