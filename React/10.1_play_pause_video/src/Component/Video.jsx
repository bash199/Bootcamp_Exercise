import React, {useRef} from 'react'

const Video = ({getRef,play,pause}) => {
 
  return (
   <div>
    <video ref={getRef}>
      <source  src={'https://www.w3schools.com/html/mov_bbb.mp4'} type="video/mp4" />
    </video>
      <br/>
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
   </div>
  )
}

export default Video