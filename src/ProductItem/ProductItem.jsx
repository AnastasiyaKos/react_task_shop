import React from 'react';
import s from './ProductItem.module.css';
import basket from './img/shopping-basket.svg';
import apple from './img/apple.svg';
import carrot from './img/carrot.svg';
import fish from './img/fish.svg';
import iceCream from './img/ice-cream.svg';



const ProductItem = (props) => {
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
                <a onClick={console.log()} className={s.btnBack}>Back to list</a>
            </div>
        </div>
    )
};

export default ProductItem;