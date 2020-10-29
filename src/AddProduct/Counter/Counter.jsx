// import React from 'react';
// import {connect} from 'react-redux';
// import s from './Counter.module.css';
// import {decreaseProductCount, increaseProductCount} from "../../redux/counterReducer";
// import counterReducer from "../../redux/counterReducer";
//
//
// class Counter extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.increaseProductCount = props.increaseProductCount.bind(this);
//     //     this.decreaseProductCount.bind(this);
//     //     this.state = {productCount: 0};
//     // }
//
//     increaseProductCount(count) {
//         // this.setState(state => ({
//         //     productCount: state.productCount++
//         // }))
//         this.props.increaseProductCount(count);
//     }
//
//     decreaseProductCount = (count) => {
//         if (count > 0) {
//             // this.setState(state => ({
//             //     productCount: state.productCount--
//             // }))
//
//             this.props.decreaseProductCount(count)
//         }
//     }
//
//     render() {
//         return (
//             <div className={s.counterButton}>
//                 <button className={s.btn}
//                         onClick={() => this.decreaseProductCount}
//                         disabled={this.state.productCount <= 0}>-</button>
//                 <span className={s.counterNumber}>{this.state.productCount}</span>
//                 <button className={s.btn} onClick={this.increaseProductCount}>+</button>
//             </div>
//         )
//     }
// }
//
//
// const mapStateToProps = (state) => {
//     return {
//         productCount: state.count
//     }
// }
//
// const mapDispatchToProps = {
//     increaseProductCount,
//     decreaseProductCount
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);