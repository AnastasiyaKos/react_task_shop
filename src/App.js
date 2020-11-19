import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";

import AddProduct from './components/AddProduct/AddProduct'
import ProductList from "./components/ProductList/ProductList";
import ProductInfo from "./components/ProductList/ProductInfo/ProductInfo";


function App() {
  return (
      <div className='pageWrap'>
          <AddProduct />
          <Route path='/productList'
                 render={() => <ProductList />} />
          <Route path='/productInfo'
                 render={() => <ProductInfo />} />
          <Route exact path="/">
              <Redirect to="/productList" />
          </Route>
      </div>
  );
}

export default App;
