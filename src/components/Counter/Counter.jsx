import s from "./Counter.module.css";
import React from "react";
import {connect} from 'react-redux';


const Counter = ({count, onCountChange}) => {
    return (
        <div className={s.counterButton}>
            <button className={s.btn}
                    onClick={() => onCountChange(count - 1)}
                    disabled={count <= 0}>-</button>
            <span className={ s.counterNumber }>{count}</span>
            <button className={s.btn}
                    onClick={() => onCountChange(count + 1)}>+</button>
        </div>
    );
};

export default connect()(Counter);