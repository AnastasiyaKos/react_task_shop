import {combineReducers} from "redux";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';


const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    price: action.price,
                    count: action.count,
                    icon: action.icon
                }
            ];
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.id);


        default:
            return state
    }

}

export default combineReducers({products});



