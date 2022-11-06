function Footer({firstText,secondText,clas,url,target}){
   return (
      <div className={clas}>
         <a className='first' href={url}>{firstText}</a>
         <a className='second' href={url} target={target}> {secondText}</a>
      </div>
   )
}
export default Footer;