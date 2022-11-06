import React from 'react'

function Ballon({color}) {
  return (
    <div style={{background:color, width:'30px', height:'30px', borderRadius:'50%'}}></div>
  )
}

export default Ballon