import React from 'react';
import './App.css';

import AddProduct from './components/AddProduct/AddProduct'
import ProductList from "./components/ProductList/ProductList";


function App() {
  return (
      <div className='pageWrap'>
          <AddProduct />
          <ProductList />
      </div>
  );
}

export default App;
