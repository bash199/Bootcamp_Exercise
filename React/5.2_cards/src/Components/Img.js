
function Img({img,width,height,margin}){
   return (
      <div>
         <img style={{width:width ,height:height, margin: margin}}  src= {img}></img>
      </div>
   )
}
export default Img