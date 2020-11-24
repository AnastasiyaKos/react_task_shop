import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem/ProductItem'
import ProductInfo from "./ProductInfo/ProductInfo";

import s from './ProductList.module.css';
import axios from "axios";
import {connect} from "react-redux";
import {Icons as icons} from "../Icon/Icons";
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({}) => {

    const [state, setState] = useState();
    const [showProductInfo, setShowProductInfo] = useState(false);

    useEffect(() => {
            axios.get('http://demo8845970.mockable.io/tupayaDevka')
                .then(({data}) => {

                    setState(data.map((item) => {
                        return {
                            ...item,
                            icon: icons[item.iconIndex],
                            id: uuidv4()
                        }
                    }));
                })
        }, []
    )


    const productList = () => {
        return state.map((item) => {
            return  <ProductItem product={item} onProductInfo={onShowProductInfo}/>
        })
    }

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
                {!state ? ('') : state.length === 0 ? ('') : <div>{productList()}</div> }
                <p className={s.allProductsTotal}>Total: {} $</p>
            </div>
        ) : (
            <div>
                <ProductInfo onDisableInfo={onDisableProductInfo} product={state}/>
            </div>

        )
    )
};

export default connect()(ProductList);