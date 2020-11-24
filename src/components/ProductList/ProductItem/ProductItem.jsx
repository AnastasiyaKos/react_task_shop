import React from 'react';

import Counter from '../../Counter/Counter';

import s from './ProductItem.module.css';
import deleteIcon from '../img/delete.svg';
import infoIcon from '../img/info.svg';


const ProductItem = ({product, onProductInfo}) => {

    return (
        <div className={s.infoWrap}>
            <div className={s.productImageWrap}>
                <img src={product.icon} className={s.productImage} width='45' height='45'/>
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
                <button className={s.productInfo} onClick={onProductInfo}>
                    <img src={infoIcon} width='20' height='20'/>
                </button>
            </div>
        </div>
    )
}

export default ProductItem;