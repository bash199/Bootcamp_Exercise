import React from "react";
import {useFetch} from "./UseFetch";

const App = () => {
   const [data, isLOading, error] = useFetch(
      "https://api.chucknorris.io/jokes/random"
   );

   const [data2, isLOading2, error2] = useFetch(
      "https://6377843f5c477765121fffdd.mockapi.io/shoe"
   );

   return (
      <div>
         <p>{data && data.value}</p>
         {isLOading && <h1>Spinner</h1>}
         <p>{error && error.message}</p>
         {data2 &&
            data2.map((el) => {
               return <h2 key={el.id}>{el.brand}</h2>;
            })}
      </div>
   );
};

export default App;
