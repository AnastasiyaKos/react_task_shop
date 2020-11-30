import React, {useEffect} from 'react';
import ProductItem from '../ProductItem/ProductItem';
import {connect} from "react-redux";

import s from './ProductList.module.css';
import {getProductAction} from "../../actions";


const ProductList = ({products, dispatch}) => {

    useEffect(() => {
        !products.length && dispatch(getProductAction());
        }, []
    );

    const getTotalPrice = products.reduce((accumulator, product) => accumulator + product.price * product.count, 0);

    return <div className={s.productListWrap}>
        <h2>Product list</h2>
        {products.map((item) => <ProductItem key={item.id} product={item}/>)}
        <p className={s.allProductsTotal}>Total: {getTotalPrice} $</p>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductList);