import "./App.css";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
   const [joke, setJoke] = useState("");
   useEffect(() => {
      const fetcData = async () => {
         try {
            const {data} = await axios.get("http://localhost:8000/api/weather");
            setJoke(data);
         } catch (error) {
            const err = error.code + ", " + error.message;
            setJoke(err);
         }
      };
      fetcData();
   }, []);

   return (
      <div className="App">
         <header className="App-header">{joke}</header>
      </div>
   );
}

export default App;
