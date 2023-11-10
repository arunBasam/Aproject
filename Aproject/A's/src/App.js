import React from "react";
import {  Routes, Route } from "react-router-dom";
import Product from "./components/Product"; // Import Product component
import NextPage from "./components/NextPage"; // Import NextPage component
import ProductDetails from "./components/ProductDetails";
import MyButton from "./components/MyButton";
import MyButtonPage from "./components/MyButton";
import Button from "./components/cart";
import ButtonPage from "./components/cart";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Product />} />
      <Route path='/next-page/:id' element={<NextPage />} />
      <Route path="/MyButtonPage/:id" element={<MyButtonPage />} />

      {/* <Route path="/product-details" component={ProductDetails} /> */}
      <Route path="/product/:productId" component={ProductDetails} />
      <Route path="/button/:id" element={<ButtonPage />} />
      

    </Routes>
  );
};

export default App;
