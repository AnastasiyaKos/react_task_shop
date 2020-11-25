import {combineReducers} from "redux";
import {Icons as icons} from "../components/Icon/Icons";
import { v4 as uuidv4 } from 'uuid';


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ON_DATA_SUCCESS = 'ON_DATA_SUCCESS';


const products = (state = [], action) => {
    switch (action.type) {
        case ON_DATA_SUCCESS:
            return action.data.map(item => {
                console.log(icons[0])
                return {
                ...item,
                id: uuidv4(),
                icon: icons.map(i => item[icons[i]])
            }});

        case ADD_PRODUCT: {
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    price: action.price,
                    count: action.count,
                    icon: action.icon
                }
            ]}

        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.id);


        default:
            return state
    }

}

export default combineReducers({products});



