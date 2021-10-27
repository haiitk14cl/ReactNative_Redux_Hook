import * as Types from './../_constants/actionType';

var initialState = {
    data: [],
    isLoading: false,
    dataAddToCart: {}
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CARTS_LOADING:
            console.log("Types.FETCH_CARTS_LOADING");
            return {
                ...state,
                isLoading: true,
            };
        case Types.FETCH_CARTS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        case Types.FETCH_CARTS_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default: return state;
    }
};

export default cartReducers;