import React from 'react';



const Counter = (props) => {
    return (
        <div>
            <button className='btn btn-dark' onClick={console.log()} disabled={false}>-</button>
            <span>0</span>
            <button className='btn btn-dark' onClick={console.log()}>+</button>
        </div>
    )
};

export default Counter;