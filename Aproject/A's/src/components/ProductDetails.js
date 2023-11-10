import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  // Fetch product details based on productId and display them
  // You can fetch the product details from your productData using the productId
  const product = ProductDetails.products.find((p) => p.id === parseInt(productId));

  return (
    <div className="coverPage">
    <div className="phoneDetails">
    <div>
      {product && (
          <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ProductDetails;
