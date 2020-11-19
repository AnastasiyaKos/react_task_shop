import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import Counter from '../../Counter/Counter';

import s from './ProductItem.module.css';
import basket from '../img/shopping-basket.svg';
import deleteIcon from '../img/delete.svg';
import infoIcon from '../img/info.svg';
import {forEach} from "react-bootstrap/ElementChildren";


const ProductItem = ({product}) => {

    return (
        <div className={s.infoWrap}>
            <div className={s.productImageWrap}>
                <img src={basket} className={s.productImage} width='45' height='45'/>
            </div>
            <div className={s.infoProductWrap}>
                <span className={s.productName}>{product.label}</span>
                <Counter count={product.count}/>
                <span className={s.total}>{`Total: ${product.total} $`}</span>
            </div>
            <div className={s.buttonWrap}>
                <button className={s.deleteProduct} onClick={console.log()}>
                    <img src={deleteIcon} width='20' height='20'/>
                </button>
                <NavLink to={'/ProductInfo'}>
                    <button className={s.productInfo}>
                        <img src={infoIcon} width='20' height='20'/>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default ProductItem;