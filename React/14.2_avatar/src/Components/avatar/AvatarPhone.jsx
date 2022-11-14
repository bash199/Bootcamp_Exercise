import React from "react";
import styled from "styled-components";
const Title = styled.h6`
   margin: 3px 0 3px 0;
`;
const AvatarPhone = ({phone}) => {
   return <Title>{phone}</Title>;
};

export default AvatarPhone;
