import { CREATE_FLIGHT_BOOKING, REMOVE_FLIGHT_BOOKING } from './actionTypes';

const initialState = {
	destinationFrom: '',
	destinationTo: '',
	journeyDate: '',
	guests: 1,
	ticketClass: '',
};

export const flightBookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_FLIGHT_BOOKING:
			return {
				...state,
				destinationFrom: action.payload.destinationFrom,
				destinationTo: action.payload.destinationTo,
				journeyDate: action.payload.journeyDate,
				guests: action.payload.guests,
				ticketClass: action.payload.flightClass,
			};
		case REMOVE_FLIGHT_BOOKING:
			return {
				...state,
				destinationFrom: '',
				destinationTo: '',
				journeyDate: '',
				guests: 1,
				ticketClass: '',
			};
		default:
			return state;
	}
};
