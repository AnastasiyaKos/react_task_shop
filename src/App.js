import React from 'react';
import './App.css';
import AddProduct from './AddProduct/AddProduct'
import ProductList from "./ProductList/ProductList";
import ProductItem from "./ProductItem/ProductItem";

function App() {
  return (
      <div className='pageWrap'>
        <AddProduct />
        <ProductList/>
      </div>
  );
}

export default App;
