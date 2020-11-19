import s from "./Counter.module.css";
import React, {useState} from "react";
import {decreaseProductCount, increaseProductCount} from "../../reducers/counterReducer";
import {connect} from 'react-redux';


const Counter = ({count, increaseProductCount, decreaseProductCount}) => {
    const [countItem, setCount] = useState(count || 0);

    return (
        <div className={s.counterButton}>
            <button className={s.btn}
                    onClick={decreaseProductCount}
                    disabled={count <= 0}>-</button>
            <span className={s.counterNumber}>{count}</span>
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