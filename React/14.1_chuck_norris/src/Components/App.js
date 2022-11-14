import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
function App() {
   const [value, setValue] = useState(null);
   const [inpt, setInpt] = useState(null);
   const getRandomJoke = async () => {
      try {
         const {data} = await axios.get(
            "https://api.chucknorris.io/jokes/random"
         );
         setValue((prev) => (prev = data.value));
      } catch (err) {
         console.log(err);
      }
   };
   const getCategoriesJokes = async (category) => {
      try {
         const {data} = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
         );
         setValue((prev) => (prev = data.value));
      } catch (err) {
         console.log(err);
      }
   };
   const getCategories = async () => {
      try {
         const {data} = await axios.get(
            "https://api.chucknorris.io/jokes/categories"
         );
         setValue(
            (prev) =>
               (prev = data.map((cat) => {
                  return (
                     <div
                        key={cat}
                        onClick={() => {
                           getCategoriesJokes(cat);
                        }}>
                        {cat}
                     </div>
                  );
               }))
         );
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      // if(inpt){
      //    const searchQuery = async () => {
      //    try {
      //       const {data} = await axios.get(
      //          `https://api.chucknorris.io/jokes/search?query=${inpt}`
      //       );
      //       console.log(data.result[0].value);
      //       setValue((prev) => (prev = data.result[0].value));
      //    } catch (err) {
      //       console.log(err);
      //    }
      // };
      // searchQuery();
      // }
      const debounce = setTimeout(() => {
         if (inpt) {
            const searchQuery = async () => {
               try {
                  const {data} = await axios.get(
                     `https://api.chucknorris.io/jokes/search?query=${inpt}`
                  );
                  setValue((prev) => (prev = data.result[0].value));
               } catch (err) {
                  console.log(err);
               }
            };
            searchQuery();
         }
      }, 1000);
      return () => {
         clearTimeout(debounce);
      };
   }, [inpt]);

   return (
      <div className="App">
         <button onClick={getRandomJoke}>Random Joke</button>
         <button onClick={getCategories}>Get Categories</button>
         <input
            onChange={(e) => {
               setInpt(e.target.value);
            }}
         />
         <div>
            <h2>Chuck Norris Jokes</h2>
            <div>{value}</div>
         </div>
      </div>
   );
}

export default App;
