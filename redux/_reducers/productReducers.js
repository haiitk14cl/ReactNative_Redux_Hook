import * as Types from './../_constants/actionType';

var initialState = {
    data: [],
    isLoading: false,
};

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case Types.FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        case Types.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default: return state;
    }
};

export default productReducers;