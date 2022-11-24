// import { createContext } from "react";
import {createContext, useEffect, useState} from "react";
import data from "./assets/data.json";
import Blabla from "./components/ListItem/Blabla";
export const ctx = createContext();
function App() {
   const [state, setState] = useState([]);
   const [sorted, setSorted] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setState(() =>
            data.map(({name}) => {
               return name;
            })
         );
      }, 2000);
   }, []);

   const sortData = () => {
      if (!sorted) {
         setState(state.sort());
         setSorted(!sorted);
      } else {
         setState(state.reverse());
         setSorted(!sorted);
      }
   };

   return (
      <div>
         <button onClick={sortData}>Sort</button>
         <ctx.Provider value={{state}}>
            <Blabla />
         </ctx.Provider>
      </div>
   );
}
export default App;
