import { ADD_TO_CART, CLEAR_PRODUCT, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (product) => {
	return {
		type: ADD_TO_CART,
		payload: product,
	};
};

export const removeFromCart = (product) => {
	return {
		type: REMOVE_FROM_CART,
		payload: product,
	};
};

export const clearProduct = (product) => {
	return {
		type: CLEAR_PRODUCT,
		payload: product,
	};
};
