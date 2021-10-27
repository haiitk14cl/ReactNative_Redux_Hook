import * as Types from './../_constants/actionType';
import { callApi } from './../_utils/apiCaller';

export const actionGetProductRequest = () => {
    return dispatch => {
        dispatch({ type: Types.FETCH_PRODUCTS_LOADING });
        return callApi('products', 'GET', {}).then(res => {
            if (res && res.data) {
                dispatch(actionGetProduct(Types.FETCH_PRODUCTS, res.data));
            } else {
                dispatch(actionGetProduct(Types.FETCH_PRODUCTS_FAILURE, []));
            }
        });
    }
}
export const actionGetProduct = (type, arg) => {
    return {
        type: type,
        data: arg,
    }
}
