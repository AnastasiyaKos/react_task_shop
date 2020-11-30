import React, {useState} from 'react';
import {connect} from "react-redux";


import Counter from '../Counter/Counter';
import s from './AddProduct.module.css';
import IconSelect from "../IconSelect/IconSelect";
import {addProductAction} from "../../actions";
import {defaultIcon} from './../Icon/Icons';

const BASKET_ICON = defaultIcon;

const AddProduct = ({dispatch}) => {

    const newProduct = {
        label: '',
        price: 0,
        count: 1,
        icon: defaultIcon,
    };

    const [product, setProduct] = useState(newProduct);

    const productInputChange = event => setProduct({
        ...product,
        [event.target.name]: event.target.value
    });

    const onCountChange = count =>  setProduct({
        ...product,
        count: count
    });

    const onIconChange = icon => {
        setProduct({
        ...product,
        icon: icon
    })};

    const addProduct = () => {
        dispatch(addProductAction(product));
        console.log(newProduct)
        setProduct(newProduct);

    };

    return (
        <div className={s.addProductWrap}>
            <h2>Add product to your cart list</h2>
            <div className={s.addProductInput}>
                <input className={s.productInput} name='label' placeholder='Product name'
                       onChange={productInputChange} value={product.label} />
                <input type='number'
                       className={s.productInput} name='price' placeholder='Product price'
                       onChange={productInputChange} value={product.price} />
            </div>
            <div className={s.counterWrap}>
                <Counter onCountChange={onCountChange} count={product.count} />
            </div>
            <IconSelect defaultIcon={BASKET_ICON} onChange={(icon) => onIconChange(icon)}/>
            <button className={s.addProduct} onClick={addProduct}>
                Add to list
            </button>
        </div>
    )
};



export default connect()(AddProduct);