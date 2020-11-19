import React, {useState} from 'react';
import {Provider} from "react-redux";

import Counter from '../Counter/Counter';
import s from './AddProduct.module.css';
import basket from './img/shopping-basket.svg';
import Products from "../Products/Products";
import counterReducer from "../../reducers/counterReducer";


const AddProduct = (props) => {

    const [productItem, setProductItem] = useState([
        {name: 'Buy apples', price: 10, count: 2}
    ]);

    const [isEditMode, setIsEditMode] = useState(false);
    // const [productItem, setProductItem] = useState({
    //     name: undefined,
    //     price: undefined,
    //     count: 0
    // })

    const setEditProduct = () => {
        if (!isEditMode) {
            setIsEditMode(true)
        }
        if (isEditMode) {
            setIsEditMode(false)
        }
    };

    const addProduct = (name, price, count) => {
        const newItem = {
            name, price, count
        }

        setProductItem([...productItem, newItem]);
    };


    return (
        <div className={s.addProductWrap}>
            <h2>Add product to your cart list</h2>
            <div className={s.addProductInput}>
                <input className={s.productInput} placeholder='Product name' onChange={(e) => {
                }}/>
                <input type='number' className={s.productInput} placeholder='Product price'/>
            </div>
            <div className={s.counterWrap}>
                <Counter/>
            </div>
            <div className={s.productImageWrap} onClick={setEditProduct}>
                <img src={basket} className={s.productImage} width='35' height='35' alt='basket'/>
            </div>
            {isEditMode && <Products/>}
            <button className={s.addProduct} onClick={addProduct}>
                Add to list
            </button>
        </div>
    )
};

export default AddProduct;