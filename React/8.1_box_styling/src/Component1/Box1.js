// import './Box1.css'
import Box2 from '../Component2/Box2'
import styled from 'styled-components';

const Box = styled.div`
   width: 500px;
   height: 500px;
   background-color: teal;
   padding: 10px;
   margin: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

function Box1(){
   return (
      <Box><Box2></Box2></Box>
   )
}
export default Box1;