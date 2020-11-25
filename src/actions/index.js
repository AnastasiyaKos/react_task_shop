import { v4 as uuidv4 } from 'uuid';

import {ADD_PRODUCT, ON_DATA_SUCCESS, REMOVE_PRODUCT} from "../reducers";


export const onDataSuccess = data => ({
    type: ON_DATA_SUCCESS,
    data: data
})

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