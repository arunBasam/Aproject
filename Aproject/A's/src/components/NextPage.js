import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";


//const[product, setProduct] = useState([localStorage.getItem('productData')]);
const NextPage = () => {
  const location = useLocation();
   
 
  const [product, setProduct ]= useState( localStorage.getItem('productData')? JSON.parse(localStorage.getItem('productData'))[0] : {});
  console.log('local storage>>>', product);
  return (
    <div className="test">
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2 >{product.title}</h2>
      <p>{product.description}</p>
      <p className="Price">Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <button className="butNxt" >BUY NOW</button>
      

    </div>
    </div>
  );
};

export default NextPage;
