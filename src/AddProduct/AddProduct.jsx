import React from 'react';
import Counter from './Counter/Counter';
// import { Image } from 'react-bootstrap';
import s from './AddProduct.module.css';
import basket from './img/basket.svg';
import apple from './img/apple.svg';
import carrot from './img/carrot.svg';
import fish from './img/fish.svg';
import iceCream from './img/ice-cream.svg';


const AddProduct = (props) => {
    return (
        <div className={s.addProductWrap}>
            <h2>Add product to your cart list</h2>
            <div className={s.addProductInput}>
                <input className={s.productInput} placeholder='Product name' />
                <input className={s.productInput} placeholder='Product price' />
            </div>
            <div className={s.counterWrap}>
                <Counter />
            </div>
            <div className={s.productImageWrap}>
                <img src={basket} className={s.productImage} width='35' height='35'  />
            </div>
            <div className={s.productListImage} >
                <img src={apple} className={s.productImage} width='35' height='35'  />
                <img src={carrot} className={s.productImage} width='35' height='35'  />
                <img src={fish} className={s.productImage} width='35' height='35'  />
                <img src={iceCream} className={s.productImage} width='35' height='35'  />
            </div>
            <button className={s.addProduct} onClick={console.log()}>Add to list</button>
        </div>
    )
};

export default AddProduct;