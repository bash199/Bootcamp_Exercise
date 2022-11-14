import React from "react";
import styled from "styled-components";
const Title = styled.h4`
   margin: 3px 0 3px 0;
`;
const AvatarName = ({name}) => {
   return <Title>{name}</Title>;
};

export default AvatarName;
