function Card({children,margin,background,color,padding}){
   return (
      <div style={{margin:margin, background:background, color:color, padding:padding}} className='card-div'>
         {children}
      </div>
   )
}
export default Card;