import React from "react";
import styled from "styled-components";
const Title = styled.h5`
   margin: 3px 0 3px 0;
`;
const AvatarCountry = ({country}) => {
   return <Title>{country}</Title>;
};

export default AvatarCountry;
