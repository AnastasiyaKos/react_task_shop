import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

import AddProduct from './components/AddProduct/AddProduct';
// import ProductList from "./components/ProductList/ProductList";
// import ProductInfo from "./components/ProductInfo/ProductInfo";

const ProductList = React.lazy(() => import('./components/ProductList/ProductList'));
const ProductInfo = React.lazy(() => import('./components/ProductInfo/ProductInfo'));


function App() {
    return (
        <div className='pageWrap'>
            <AddProduct/>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/'>
                            <ProductList/>
                        </Route>
                        <Route exact path='/:id'>
                            <ProductInfo/>
                        </Route>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
