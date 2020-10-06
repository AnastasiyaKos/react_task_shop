import React from 'react';
import Counter from './../AddProduct/Counter/Counter';
import { Image } from 'react-bootstrap';
import s from './ProductList.module.css';
import basket from './img/basket.svg';
import deleteIcon from './img/delete.svg';
import infoIcon from './img/info.svg';


const ProductList = (props) => {
    return (
        <div className={s.productListWrap}>
            <h2>Product list</h2>
            <div className={s.infoWrap}>
                <div className={s.productImageWrap}>
                    <img src={basket} className={s.productImage} width='45' height='45'  />
                </div>
                <div className={s.infoProductWrap}>
                    <span className={s.productName}>buy apples</span>
                    <Counter />
                    <span>Total: 10 $</span>
                </div>
                <div className={s.buttonWrap}>
                    <button className={s.deleteProduct} onClick={console.log()}>
                        <img src={deleteIcon} width='20' height='20'/>
                    </button>
                    <button className={s.productInfo} onClick={console.log()}>
                        <img src={infoIcon} width='20' height='20'/>
                    </button>
                </div>
            </div>
            <span>Total: 17 $</span>
        </div>
    )
};

export default ProductList;