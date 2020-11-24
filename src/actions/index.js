import { v4 as uuidv4 } from 'uuid';

import {ADD_PRODUCT, REMOVE_PRODUCT} from "../reducers";


export const addProductAction = product => ({
    type: ADD_PRODUCT,
    id: uuidv4(),
    ...product
});

export const editProductCount = ({id, count}) => {

}

export const removeProductAction = id => ({
    type: REMOVE_PRODUCT,
    id: id
});