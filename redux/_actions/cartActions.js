import * as Types from './../_constants/actionType';
import { callApi } from './../_utils/apiCaller';
import { Alert } from 'react-native';

export const actionGetCartRequest = () => {
    console.log("actionGetCartRequest----------------------");
    return dispatch => {
        dispatch({ type: Types.FETCH_CARTS_LOADING });
        return callApi('carts', 'GET', {}).then(res => {
            if (res && res.data) {
                dispatch(actionGetCart(Types.FETCH_CARTS, res.data));
            } else {
                dispatch(actionGetCart(Types.FETCH_CARTS_FAILURE, []));
            }
        });
    }
}
export const actionGetCart = (type, arg) => {
    return {
        type: type,
        data: arg,
    }
}

export const actionInsertCartRequest = (product) => {
    console.log("actionInsertCartRequest----------------------");
    return dispatch => {
        dispatch({type: Types.INSERT_CART_LOADING});
        return callApi('carts', 'POST', product).then(res => {
            if (res && res.data) {
                Alert.alert("Đã thêm giỏ hàng");
            }
            else
            {
                Alert.alert("ERROR");
            }
        });
    }
}

export const actionUpdateCartRequest = (id, product) => {
    console.log("actionUpdateCartRequest----------------------");
    return dispatch => {
        dispatch({type: Types.UPDATE_CART_LOADING});
        return callApi(`carts/${id}`, 'PUT', product).then(res => {
            if (res && res.data) {
                Alert.alert("Đã thêm giỏ hàng");
            }
            else
            {
                Alert.alert("ERROR");
            }
        });
    }
}
