import React from 'react';
import './App.css';
import AddProduct from './AddProduct/AddProduct'
import ProductList from "./ProductList/ProductList";
import ProductItem from "./ProductItem/ProductItem";

function App() {
  return (
      <div>
        <AddProduct />
        <ProductItem/>
      </div>
  );
}

export default App;
