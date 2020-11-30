import {combineReducers} from "redux";
import {Icons as icons} from "../components/Icon/Icons";
import { v4 as uuidv4 } from 'uuid';


export const ON_DATA_SUCCESS = 'ON_DATA_SUCCESS';
export const ON_DATA_ERROR = 'ON_DATA_ERROR';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT_COUNT = 'EDIT_PRODUCT_COUNT';



const products = (state = [], action) => {
    switch (action.type) {
        case ON_DATA_SUCCESS:
            return action.data.map(item => {
                return {
                ...item,
                id: uuidv4(),
                icon: icons[item.iconIndex],
                total: item.count * item.price
            }});

        case ON_DATA_ERROR:
            return state;

        case ADD_PRODUCT:
            console.log(action)
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    price: action.price,
                    count: action.count,
                    icon: action.icon,
                    total: action.count * action.price
                }
            ];

        case EDIT_PRODUCT_COUNT:
            return state.map(product =>
                (product.id === action.id) ? {
                        ...product,
                        count: action.count,
                        total: action.count * product.price
                } : product
            );

        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.id);


        default:
            return state
    }

}

export default combineReducers({products});



