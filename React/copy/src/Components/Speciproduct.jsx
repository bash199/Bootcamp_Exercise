import React from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
const Speciproduct = ({store}) => {
   const params = useParams();
   const displayData = () => {
      return (
         <>
            <h3>{store[params.productId - 1].title}</h3>
            <h4>{store[params.productId - 1].size}</h4>
            <img src={store[params.productId - 1].imageUrl} alt="bob" />
            <p>{store[params.productId - 1].price}</p>
         </>
      );
   };
   return (
      <div>
         <center>
            <div>{displayData()}</div>
            <Link
               to="/products"
               style={{color: "black", textDecoration: "none"}}>
               Back
            </Link>
         </center>
      </div>
   );
};

export default Speciproduct;
