import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem/ProductItem'

import {getAllProduct} from "../../services/ProductStoreService";

import s from './ProductList.module.css';


const ProductList = () => {

    const [state, setState] = useState();

    useEffect(() => {
        getAllProduct()
            .then(({data}) => {
                    setState(data);
            })}, []
    )

    return (
        <div className={s.productListWrap}>
            <h2>Product list</h2>
            {!state ? (<div></div>) :  state.length === 0 ? (<div></div>) : state.map((item) =>
                <ProductItem product={item}/>)}
            <p className={s.allProductsTotal}>Total: 17 $</p>
        </div>
    )
};

export default ProductList;