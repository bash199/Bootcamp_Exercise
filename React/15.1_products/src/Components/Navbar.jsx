import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
   return (
      <nav className="menu-container">
         {/* <!-- burger menu --> */}
         <input type="checkbox" aria-label="Toggle menu" />
         <span></span>
         <span></span>
         <span></span>
         {/* <!-- logo --> */}
         <a href="/" className="menu-logo">
            <img src="./TAPUACH.png" alt="AppleSeeds Store" />
         </a>
         {/* <!-- menu items --> */}
         <div className="menu">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/products">Products</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
