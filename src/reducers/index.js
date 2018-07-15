import { UPDATE_CART } from '../constants/action-types';

const initialState = {
    products: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
}

export default rootReducer;