import { ADD_PRODUCT, REDUCE_QUANTITY } from './actionTypes';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return [
				...state,
				{
					id: state.length + 1,
					...action.payload,
				},
			];
		case REDUCE_QUANTITY:
			return state.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						quantity: item.quantity - 1,
						totalPrice: item.totalPrice - item.price,
					};
				}
				return item;
			});
		default:
			return state;
	}
};

export default reducer;
