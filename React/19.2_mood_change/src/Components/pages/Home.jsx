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

const Home = () => {
   const {themeColor} = useContext(ctx);
   return <Div style={{background: themeColor}}>Home</Div>;
};

export default Home;
