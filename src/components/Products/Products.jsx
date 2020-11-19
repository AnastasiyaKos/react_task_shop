import React from 'react';
import s from '../AddProduct/AddProduct.module.css';
import apple from './img/apple.svg';
import carrot from './img/carrot.svg';
import fish from './img/fish.svg';
import iceCream from './img/ice-cream.svg';


const Products = (props) => {
    return (
        <div className={s.productListImage} >
            <div className={s.productItemWrap}>
                <img src={apple} className={s.productImageItem} width='30' height='30'  />
            </div>
            <div className={s.productItemWrap}>
                <img src={carrot} className={s.productImageItem} width='30' height='30'  />
            </div>
            <div className={s.productItemWrap}>
                <img src={fish} className={s.productImageItem} width='30' height='30'  />
            </div>
            <div className={s.productItemWrap}>
                <img src={iceCream} className={s.productImageItem} width='30' height='30'  />
            </div>
        </div>
    )
};

export default Products;