import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem/ProductItem'
import ProductInfo from "./ProductInfo/ProductInfo";

import s from './ProductList.module.css';
import axios from "axios";
import {connect} from "react-redux";
import {onDataSuccess} from "../../actions";

const ProductList = ({products, dispatch}) => {

    const [showProductInfo, setShowProductInfo] = useState(false);

    useEffect(() => {
            axios.get('http://demo8845970.mockable.io/tupayaDevka')
                .then(({data}) => {
                    dispatch(onDataSuccess(data))
                })
        }, []
    )

    const onShowProductInfo = () => {
        setShowProductInfo(true);
    }

    const onDisableProductInfo = () => {
        setShowProductInfo(false);
    }

    return (
        !showProductInfo ? (
            <div className={s.productListWrap}>
                <h2>Product list</h2>
                {products.map((item) => <ProductItem product={item} onProductInfo={onShowProductInfo}/>
                )}
                <p className={s.allProductsTotal}>Total: {} $</p>
            </div>
        ) : (
            <div>
                <ProductInfo onDisableInfo={onDisableProductInfo} product={products}/>
            </div>

        )
    )
};

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductList);