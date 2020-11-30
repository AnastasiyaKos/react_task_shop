import { v4 as uuidv4 } from 'uuid';

import {ADD_PRODUCT, ON_DATA_SUCCESS, ON_DATA_ERROR, EDIT_PRODUCT_COUNT, REMOVE_PRODUCT} from "../reducers";
import {getAllProduct} from "../services/ProductStoreService";


export const onDataSuccessAction = data => ({
    type: ON_DATA_SUCCESS,
    data: data
});

export const onDataErrorAction = error => ({
    type: ON_DATA_ERROR,
    error: error
});

export const getProductAction = () => {
    return (dispatch) => {
        getAllProduct()
            .then(({data}) => {
                dispatch(onDataSuccessAction(data))
            })
            .catch(error => {
                dispatch(onDataErrorAction(error))
            })
    }
};

export const addProductAction = product => ({
    type: ADD_PRODUCT,
    id: uuidv4(),
    ...product
});

export const editProductCountAction = ({id, count}) => ({
    type: EDIT_PRODUCT_COUNT,
    id: id,
    count: count
});

export const removeProductAction = id => ({
    type: REMOVE_PRODUCT,
    id: id
});

