import React from 'react';
import Counter from './../AddProduct/Counter/Counter';
import { Image } from 'react-bootstrap';
import s from './ProductList.module.css';
import basket from './img/basket.svg';
import deleteIcon from './img/delete.svg';
import infoIcon from './img/info.svg';


const ProductList = (props) => {
    return (
        <div className={s.productListWrap}>
            <h2>Product list</h2>
            <div>
                <Image src={basket} width='50' hieght='50' roundedCircle />
                <div>
                    <span className={s.productName}>buy apples</span>
                    <Counter />
                    <span>Total: 10 $</span>
                </div>
                <div>
                    <button className={s.deleteProduct} onClick={console.log()}>
                        <img src={deleteIcon} width='15' height='15'/>
                    </button>
                    <button className={s.productInfo} onClick={console.log()}>
                        <img src={infoIcon} width='15' height='15'/>
                    </button>
                </div>
            </div>
            <span>Total: 17 $</span>
        </div>
    )
};

export default ProductList;