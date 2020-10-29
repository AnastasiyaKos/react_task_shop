import s from "./Counter.module.css";
import React from "react";
import {decreaseProductCount, increaseProductCount} from "../../redux/counterReducer";
import {connect} from 'react-redux';


const Counter = ({counter, increaseProductCount, decreaseProductCount}) => {
    return (
        <div className={s.counterButton}>
            <button className={s.btn}
                    onClick={decreaseProductCount}
                    disabled={counter <= 0}>-</button>
            <span className={s.counterNumber}>{counter}</span>
            <button className={s.btn}
                    onClick={increaseProductCount}>+</button>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}


export default connect(mapStateToProps, {increaseProductCount, decreaseProductCount})(Counter);