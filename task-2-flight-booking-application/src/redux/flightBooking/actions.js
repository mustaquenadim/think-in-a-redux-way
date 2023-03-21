import { CREATE_FLIGHT_BOOKING, REMOVE_FLIGHT_BOOKING } from './actionTypes';

export const createFlightBooking = (flightBooking) => ({
	type: CREATE_FLIGHT_BOOKING,
	payload: flightBooking,
});

export const removeFlightBooking = (flightBooking) => ({
	type: REMOVE_FLIGHT_BOOKING,
	payload: flightBooking,
});
