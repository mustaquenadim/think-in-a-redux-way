import { ADD_TO_CART, CLEAR_PRODUCT, REMOVE_FROM_CART } from './actionTypes';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			if (state.find((item) => item.id === action.payload.id)) {
				return state.map((item) => {
					if (item.id === action.payload.id) {
						return {
							...item,
							quantity: item.quantity + 1,
						};
					}
					return item;
				});
			}
			return [
				...state,
				{
					...action.payload,
					quantity: 1,
				},
			];
		case REMOVE_FROM_CART:
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						quantity: item.quantity - 1,
					};
				}
				return item;
			});
		case CLEAR_PRODUCT:
			return state.filter((item) => item.id !== action.payload.id);
		default:
			return state;
	}
};

export default reducer;
