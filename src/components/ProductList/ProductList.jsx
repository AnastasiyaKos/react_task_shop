import React, {useEffect, useState} from 'react';
import ProductItem from '../ProductItem/ProductItem';
import axios from "axios";
import {connect} from "react-redux";

import s from './ProductList.module.css';
import {onDataSuccess} from "../../actions";


const ProductList = ({products, dispatch}) => {



    useEffect(() => {
            axios.get('http://demo8845970.mockable.io/tupayaDevka')
                .then(({data}) => {
                    dispatch(onDataSuccess(data))
                })
        }, []
    );

    const getTotalPrice = () => {
        return products.reduce((accumulator, product) => accumulator + product.price * product.count, 0)
    }

    return <div className={s.productListWrap}>
        <h2>Product list</h2>
        {products.map((item) => <ProductItem key={item.id} product={item}/>)}
        <p className={s.allProductsTotal}>Total: {getTotalPrice()} $</p>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductList);