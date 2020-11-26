import React from 'react';
import './App.css';

import AddProduct from './components/AddProduct/AddProduct'
import ProductList from "./components/ProductList/ProductList";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import  {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
    return (
        <div className='pageWrap'>
            <AddProduct/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <ProductList/>
                    </Route>
                    <Route exact path='/:id'>
                        <ProductInfo/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
