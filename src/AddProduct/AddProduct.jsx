import React from 'react';
import Counter from './Counter/Counter2';
import s from './AddProduct.module.css';
import basket from './img/shopping-basket.svg';
import Products from "../Products/Products";
import {Provider} from "react-redux";
import {createStore} from "redux";
import counterReducer from "../redux/counterReducer";


const store = createStore(counterReducer);

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isEditMode: false}
    }

    setEditProduct = () => {
        this.setState((state) => ({
            isEditMode: !state.isEditMode
        }));
    }

    render() {
        return (
            <div className={s.addProductWrap}>
                <h2>Add product to your cart list</h2>
                <div className={s.addProductInput}>
                    <input className={s.productInput} placeholder='Product name'/>
                    <input className={s.productInput} placeholder='Product price'/>
                </div>
                <div className={s.counterWrap}>
                    <Provider store={store}>
                        <Counter/>
                    </Provider>
                </div>
                <div className={s.productImageWrap} onClick={this.setEditProduct}>
                    <img src={basket} className={s.productImage} width='35' height='35' alt='basket'/>
                </div>
                {this.state.isEditMode && <Products/>}
                <button className={s.addProduct} onClick={console.log()}>Add to list</button>
            </div>
        )
    }
};

export default AddProduct;