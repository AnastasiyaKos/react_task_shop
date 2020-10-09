import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";

import AddProduct from './AddProduct/AddProduct'
import ProductList from "./ProductList/ProductList";
import ProductItem from "./ProductItem/ProductItem";


function App() {
  return (
      <div className='pageWrap'>
          <AddProduct />
          <Route path='/productList'
                 render={() => <ProductList />} />
          <Route path='/productItem'
                 render={() => <ProductItem />} />
          <Route exact path="/">
              <Redirect to="/productList" />
          </Route>
      </div>
  );
}

export default App;
