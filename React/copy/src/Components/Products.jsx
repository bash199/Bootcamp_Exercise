import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import productsStore from "./store";
const Products = () => {
   const [store, setStore] = useState(productsStore);

   return (
      <div>
         <h2>Products</h2>
         {store.map((item) => {
            return (
               <Link
                  style={{
                     margin: "10px",
                     color: "black",
                     textDecoration: "none",
                  }}
                  key={item.id}
                  to={`/products/${item.id}`}>
                  {item.title}
               </Link>
            );
         })}
      </div>
   );
};

export default Products;
// { store <Route path="/products/:productId" element={<Speciproduct ps='meir'/>}/>}
