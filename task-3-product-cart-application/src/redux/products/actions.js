import { ADD_PRODUCT, REDUCE_QUANTITY } from './actionTypes';

export const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};

export const reduceQuantity = (id) => {
	return {
		type: REDUCE_QUANTITY,
		payload: id,
	};
};
