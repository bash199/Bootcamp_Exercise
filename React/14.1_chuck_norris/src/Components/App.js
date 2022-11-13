import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Spinner from "./spinner/Spinner";
function App() {
   const [value, setValue] = useState(null);
   const [turn, setTurn] = useState(false);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const {data} = await axios.get(
               "https://api.chucknorris.io/jokes/random"
            );
            setValue((prev) => (prev = data.value));
         } catch (err) {
            console.log(err);
         }
      };
      fetchData();
   }, [turn]);
   return (
      <div className="App">
         <button
            onClick={() => {
               setTurn((prev) => !prev);
            }}>
            click
         </button>
         {turn && (
            <div>
               <h2>Chuck Norris Jokes</h2>
               {!value && <Spinner />}
               <p>{value}</p>
            </div>
         )}
      </div>
   );
}

export default App;
