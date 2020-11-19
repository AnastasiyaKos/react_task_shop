const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, count: state.count + 1};
        case DECREASE:
            return { ...state, count: state.count - 1};
        default:
            return state
    }

}

export default counterReducer;

export const increaseProductCount = (count) => ({type: INCREASE, count});
export const decreaseProductCount = (count) => ({type: DECREASE, count});


