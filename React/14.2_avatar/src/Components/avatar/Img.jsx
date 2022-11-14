import React from "react";
import styled from "styled-components";
const Img = styled.img`
   width: 100px;
   height: 100px;
   padding: 5px;
`;

const Image = ({img}) => {
   return <Img src={img} />;
};

export default Image;
