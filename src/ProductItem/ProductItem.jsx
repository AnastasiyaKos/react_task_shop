import React from 'react';
import { Image } from 'react-bootstrap';
import s from './ProductItem.module.css';
import basket from './img/basket.svg';



const ProductItem = (props) => {
    return (
        <div className={s.productItemWrap}>
            <div>
                <span>Bue apples</span>
                <Image src={basket} width='50' hieght='50' roundedCircle />
                <div>
                    <span>Count: 10</span>
                    <span>Price: 1 $</span>
                    <span>Total: 10 $</span>
                </div>
            </div>
            <div>
                <button onClick={console.log()}>Back to list</button>
            </div>
        </div>
    )
};

export default ProductItem;