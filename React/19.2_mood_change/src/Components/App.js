import {createContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";

const themes = {
   light: "#ffffff",
   dark: "#000000",
};
export const ctx = createContext();

const App = () => {
   const [themeColor, setThemeColor] = useState('#ffffff');
   return (
      <div>
         <ctx.Provider value={{themeColor, setThemeColor}}>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </ctx.Provider>
      </div>
   );
};
export default App;
