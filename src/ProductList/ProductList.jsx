import React from 'react';
import Counter from './../AddProduct/Counter/Counter2';
import {NavLink} from "react-router-dom";
import { Image } from 'react-bootstrap';

import s from './ProductList.module.css';
import basket from './img/shopping-basket.svg';
import deleteIcon from './img/delete.svg';
import infoIcon from './img/info.svg';
import {createStore} from "redux";
import counterReducer from "../redux/counterReducer";
import {Provider} from "react-redux";


const store = createStore(counterReducer);

const ProductList = (props) => {
    return (
        <div className={s.productListWrap}>
            <h2>Product list</h2>
            <div className={s.infoWrap}>
                <div className={s.productImageWrap}>
                    <img src={basket} className={s.productImage} width='45' height='45'  />
                </div>
                <div className={s.infoProductWrap}>
                    <span className={s.productName}>Buy apples</span>
                    <Provider store={store}>
                        <Counter/>
                    </Provider>
                    <span className={s.total}>Total: 10 $</span>
                </div>
                <div className={s.buttonWrap}>
                    <button className={s.deleteProduct} onClick={console.log()}>
                        <img src={deleteIcon} width='20' height='20'/>
                    </button>
                    <NavLink to={'/ProductItem'}>
                        <button className={s.productInfo} onClick={console.log()}>
                            <img src={infoIcon} width='20' height='20'/>
                        </button>
                    </NavLink>
                </div>
            </div>
            <p className={s.allProductsTotal}>Total: 17 $</p>
        </div>
    )
};

export default ProductList;