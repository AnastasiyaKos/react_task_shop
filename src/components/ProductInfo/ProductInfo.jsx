import React from 'react';
import {withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";

import s from './ProductInfo.module.css';


const ProductInfo = ({product}) => {

    return (
        <div className={s.productItemWrap}>
            <div>
                <h2>{product.label}</h2>
                <div className={s.productImage}>
                    <img src={product.icon} width='100' height='100' alt='product'/>
                </div>
                <div>
                    <p>Count: {product.count}</p>
                    <p>Price: {product.price} $</p>
                    <p>Total: {product.count * product.price} $</p>
                </div>
            </div>
            <div className={s.btnBackWrap}>
                <Link to=''>
                    <a className={s.btnBack}>Back to list</a>
                </Link>
            </div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    product: state.products.filter(p => p.id === props.match.params.id)[0]
});

export default withRouter(connect(mapStateToProps)(ProductInfo));