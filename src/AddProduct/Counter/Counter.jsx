import React from 'react';
import s from './Counter.module.css';



const Counter = (props) => {
    return (
        <div className={s.counterButton}>
            <button className={s.btn} onClick={console.log()} disabled={false}>-</button>
            <span className={s.counterNumber}>0</span>
            <button className={s.btn} onClick={console.log()}>+</button>
        </div>
    )
};

export default Counter;