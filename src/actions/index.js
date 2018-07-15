import { UPDATE_CART } from '../constants/action-types';

export const updateCart = product => {
    return {
        'type': UPDATE_CART,
        'payload': product
    }
}