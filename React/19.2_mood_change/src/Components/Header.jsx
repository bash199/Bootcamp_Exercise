import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ctx} from "./App";
import "./header.css";
const Header = () => {
   const {themeColor, setThemeColor} = useContext(ctx);
   const handleClick = () => {
      setThemeColor(themeColor === "#ffffff" ? "#333" : "#ffffff");
   };
   return (
      <nav
         className="nav"
         style={{background: themeColor === "#ffffff" ? "teal" : "#000000"}}>
         <div className="divUl">
            <ul className="ul">
               <Link to="/">
                  <li className="lis">Home</li>
               </Link>
               <Link to="/about">
                  <li className="lis">About</li>
               </Link>
            </ul>
         </div>
         <div className="btnDiv">
            <button onClick={handleClick}>Switch</button>
         </div>
      </nav>
   );
};

export default Header;
