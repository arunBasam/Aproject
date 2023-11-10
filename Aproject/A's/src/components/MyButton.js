import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";


const MyButtonPage = () => {
  const location = useLocation();

const productFromLocalStorage = localStorage.getItem('productData');
const product = productFromLocalStorage ? JSON.parse(productFromLocalStorage)[0] : {};
  return (

  
    <div className="test">
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="Price" > Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      
      <input type="text" defaultValue={1}/> 
      
      <button className="custom-Button">Proceed to buy</button>


    </div>
    </div>
  );
};

export default MyButtonPage;














