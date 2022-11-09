import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
   width: 300px;
   height: 300px;
   padding: 10px;
   margin: 10px;
`;

const Imgaes = ({getRef, hoverIn, hoverOut, img, coloredImg}) => {
  return (
    <div>
      <Img ref={getRef} onMouseOver={()=>hoverIn(getRef,coloredImg)} onMouseOut={()=>hoverOut(getRef,img)} src={img} ></Img>
    </div>
  )
}

export default Imgaes