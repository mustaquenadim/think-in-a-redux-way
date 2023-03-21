import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookingDetails from './components/BookingDetails';
import FlightBookingForm from './components/FlightBookingForm';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<Header />

			<section>
				<div className="mt-[160px] mx-4 md:mt-[160px] relative">
					<div className="bg-white rounded-md max-w-6xl w-full mx-auto">
						<FlightBookingForm />
					</div>
				</div>

				{/* Preview Data */}
				<div className="table-container">
					<table className="booking-table">
						<thead className="bg-gray-100/50">
							<tr className="text-black text-left">
								<th>Destination From</th>
								<th>Destination To</th>
								<th className="text-center">Journey Date</th>
								<th className="text-center">Guests</th>
								<th className="text-center">Class</th>
								<th className="text-center">Delete</th>
							</tr>
						</thead>
						<tbody
							className="divide-y divide-gray-300/20"
							id="lws-previewBooked"
						>
							<BookingDetails />
							<BookingDetails />
							<BookingDetails />
						</tbody>
					</table>
				</div>
			</section>
		</Provider>
	);
}

export default App;
