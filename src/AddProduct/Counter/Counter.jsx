import React from 'react';
import s from './Counter.module.css';



class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increaseProductCount.bind(this);
        this.decreaseProductCount.bind(this);
        this.state = {productCount: 0};
    }

    increaseProductCount = () => {
        this.setState(state => ({
            productCount: state.productCount++
        }))
    }

    decreaseProductCount = (count) => {
        if (count > 0) {
            this.setState(state => ({
                productCount: state.productCount--
            }))
        }
    }

    render() {
        return (
            <div className={s.counterButton}>
                <button className={s.btn}
                        onClick={() => this.decreaseProductCount(this.state.productCount)}
                        disabled={this.state.productCount <= 0}>-</button>
                <span className={s.counterNumber}>{this.state.productCount}</span>
                <button className={s.btn} onClick={this.increaseProductCount}>+</button>
            </div>
        )
    }
};

export default Counter;