import { combineReducers } from 'redux';
import { flightBookingReducer } from './flightBooking/flightBookingReducer';

const rootReducer = combineReducers({
	flightBooking: flightBookingReducer,
});

export default rootReducer;
