import React from 'react';
import Counter from './Counter/Counter';
import { Image } from 'react-bootstrap';
import s from './AddProduct.module.css';
import basket from './img/basket.svg';


const AddProduct = (props) => {
    return (
        <div className={s.addProductWrap}>
            <h2>Add product to your cart list</h2>
            <input className={s.productInput} placeholder='Product name' />
            <input className={s.productInput} placeholder='Product price' />
            <Counter />
            <Image src={basket} width='50' hieght='50' roundedCircle />
            <button className={s.addProduct} onClick={console.log()}>Add to list</button>
        </div>
    )
};

export default AddProduct;