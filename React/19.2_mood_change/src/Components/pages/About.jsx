import React, {useContext} from "react";
import styled from "styled-components";
import {ctx} from "../App";

const Div = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const About = () => {
   const {themeColor} = useContext(ctx);
   return <Div style={{background: themeColor}}>About</Div>;
};

export default About;
