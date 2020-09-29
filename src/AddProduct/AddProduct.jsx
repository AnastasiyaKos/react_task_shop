import React from 'react';
import Counter from './Counter/Counter';
// import { Image } from 'react-bootstrap';
import s from './AddProduct.module.css';
import basket from './img/basket.svg';


const AddProduct = (props) => {
    return (
        <div className={s.addProductWrap}>
            <h2>Add product to your cart list</h2>
            <div className={s.addProductInput}>
                <input className={s.productInput} placeholder='Product name' />
                <input className={s.productInput} placeholder='Product price' />
            </div>
            <Counter />
            <div className={s.productImageWrap}>
                <img src={basket} className={s.productImage} width='50' height='50'  />
            </div>
            <button className={s.addProduct} onClick={console.log()}>Add to list</button>
        </div>
    )
};

export default AddProduct;