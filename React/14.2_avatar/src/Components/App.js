import React, {useState, useEffect} from "react";
import axios from "axios";
import Cards from "./card/Card";
function App() {
   const [value, setValue] = useState([]);
   const [inputSearch, setInputSearch] = useState("");
   const insertDataOfPerson = (data) => {
      return data.map((el) => {
         return {
            name: `${el.name.title} ${el.name.first} ${el.name.last}`,
            picture: `${el.picture.medium}`,
            country: `${el.location.country}`,
            key: `${el.id.value}${el.id.name}${el.phone}`,
            phone: `${el.phone}`,
         };
      });
   };
   useEffect(() => {
      if (!inputSearch) {
         const getRandomUser = async () => {
            try {
               const {data} = await axios.get(
                  "https://randomuser.me/api/?results=10"
               );
               const user = data.results;
               setValue(() => insertDataOfPerson(user));
            } catch (err) {
               console.log(err);
            }
         };
         getRandomUser();
      }
   }, []);
   return (
      <div className="App">
         <input
            placeholder="Search By Name"
            onChange={(e) => {
               setInputSearch(e.target.value);
            }}
         />
         <Cards inputSearch={inputSearch} val={value} />
      </div>
   );
}

export default App;
