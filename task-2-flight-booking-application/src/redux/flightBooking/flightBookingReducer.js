import { CREATE_FLIGHT_BOOKING, REMOVE_FLIGHT_BOOKING } from './actionTypes';

const initialState = {
	flightBookingList: [],
};

export const flightBookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_FLIGHT_BOOKING:
			if (state.flightBookingList.length <= 2) {
				return {
					...state,
					flightBookingList: [
						...state.flightBookingList,
						{ id: state.flightBookingList.length + 1, ...action.payload },
					],
				};
			}
		case REMOVE_FLIGHT_BOOKING:
			return {
				...state,
				flightBookingList: state.flightBookingList.filter(
					(flightBooking) => flightBooking.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};
