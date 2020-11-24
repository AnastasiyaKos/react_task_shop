import React from 'react';
import {NavLink} from "react-router-dom";

import s from './ProductInfo.module.css';
import apple from './img/apple.svg';


const ProductInfo = ({onDisableInfo, product}) => {



    return (
        <div className={s.productItemWrap}>
            <div>
                <h2>buy apples</h2>
                <div className={s.productImage}>
                    <img src={apple} width='100' height='100' alt='product' />
                </div>
                <div>
                    <p>Count: 10</p>
                    <p>Price: 1 $</p>
                    <p>Total: 10 $</p>
                </div>
            </div>
            <div className={s.btnBackWrap}>
                <a onClick={onDisableInfo} className={s.btnBack}>Back to list</a>
            </div>
        </div>
    )
};

export default ProductInfo;