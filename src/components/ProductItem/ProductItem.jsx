import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Counter from '../Counter/Counter';
import deleteIcon from '../ProductList/img/delete.svg';
import infoIcon from '../ProductList/img/info.svg';
import Icon from "../Icon/Icon";
import s from './ProductItem.module.css';
import {editProductCountAction, removeProductAction} from "../../actions";


const ProductItem = ({product, onProductInfo, dispatch}) => {

    const onCountChange = count => {
        dispatch(editProductCountAction({id:product.id, count}));
    }

    const removeProduct = () => {
        dispatch(removeProductAction(product.id));
    }


    return (
        <div className={s.infoWrap}>
            <div className={s.productImageWrap}>
                <img src={product.icon} className={s.productImage} width='45' height='45'/>
            </div>
            <div className={s.infoProductWrap}>
                <span className={s.productName}>{product.label}</span>
                <Counter count={product.count} onCountChange={onCountChange}/>
                <span className={s.total}>{`Total: ${product.total} $`}</span>
            </div>
            <div className={s.buttonWrap}>
                <button className={s.deleteProduct} onClick={removeProduct}>
                    <img src={deleteIcon} width='20' height='20'/>
                </button>
                <Link to={'/' + product.id}>
                    <button className={s.productInfo} onClick={onProductInfo}>
                        <img src={infoIcon} width='20' height='20'/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default connect()(ProductItem);