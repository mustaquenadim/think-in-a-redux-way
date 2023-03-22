import React, { useState } from 'react';
import LocationIcon from '../assets/icons/Frame.svg';
import UserIcon from '../assets/icons/Vector (1).svg';
import BriefcaseIcon from '../assets/icons/Vector (3).svg';
import { useDispatch } from 'react-redux';
import { createFlightBooking } from '../redux/flightBooking/actions';

const FlightBookingForm = () => {
	const [destinationFrom, setDestinationFrom] = useState('');
	const [destinationTo, setDestinationTo] = useState('');
	const [journeyDate, setJourneyDate] = useState('');
	const [guests, setGuests] = useState('');
	const [ticketClass, setTicketClass] = useState('');

	const dispatch = useDispatch();

	const handleFlightSubmit = (e) => {
		e.preventDefault();

		if (
			!destinationFrom ||
			!destinationTo ||
			!journeyDate ||
			!guests ||
			!ticketClass
		)
			return alert('Please fill all the fields');

		const data = {
			destinationFrom,
			destinationTo,
			journeyDate,
			guests,
			ticketClass,
		};

		console.log(data);
		dispatch(createFlightBooking(data));
	};

	return (
		<form className="first-hero lws-inputform">
			{/* <!-- From --> */}
			<div className="des-from">
				<p>Destination From</p>
				<div className="flex flex-row">
					<img src={LocationIcon} alt="" />
					<select
						className="outline-none px-2 py-2 w-full"
						name="from"
						id="lws-from"
						required
						onChange={(e) => setDestinationFrom(e.target.value)}
					>
						<option value="" hidden>
							Please Select
						</option>
						<option value={'DHAKA'}>Dhaka</option>
						<option value={'SYLHET'}>Sylhet</option>
						<option value={'SAIDPUR'}>Saidpur</option>
						<option value={'COXSBAZAR'}>Cox's Bazar</option>
					</select>
				</div>
			</div>

			{/* <!-- To --> */}
			<div className="des-from">
				<p>Destination To</p>
				<div className="flex flex-row">
					<img src={LocationIcon} alt="" />
					<select
						className="outline-none px-2 py-2 w-full"
						name="to"
						id="lws-to"
						required
						onChange={(e) => setDestinationTo(e.target.value)}
					>
						<option value="" hidden>
							Please Select
						</option>
						<option value={'DHAKA'}>Dhaka</option>
						<option value={'SYLHET'}>Sylhet</option>
						<option value={'SAIDPUR'}>Saidpur</option>
						<option value={'COXSBAZAR'}>Cox's Bazar</option>
					</select>
				</div>
			</div>

			{/* <!-- Date --> */}
			<div className="des-from">
				<p>Journey Date</p>
				<input
					type="date"
					className="outline-none px-2 py-2 w-full date"
					name="date"
					id="lws-date"
					required
					onChange={(e) => setJourneyDate(e.target.value)}
				/>
			</div>

			{/* <!-- Guests --> */}
			<div className="des-from">
				<p>Guests</p>
				<div className="flex flex-row">
					<img src={UserIcon} alt="" />
					<select
						className="outline-none px-2 py-2 w-full"
						name="guests"
						id="lws-guests"
						required
						onChange={(e) => setGuests(e.target.value)}
					>
						<option value="" hidden>
							Please Select
						</option>
						<option value="1">1 Person</option>
						<option value="2">2 Persons</option>
						<option value="3">3 Persons</option>
						<option value="4">4 Persons</option>
					</select>
				</div>
			</div>

			{/* <!-- Class --> */}
			<div className="des-from !border-r-0">
				<p>Class</p>
				<div className="flex flex-row">
					<img src={BriefcaseIcon} alt="" />
					<select
						className="outline-none px-2 py-2 w-full"
						name="ticketClass"
						id="lws-ticketClass"
						required
						onChange={(e) => setTicketClass(e.target.value)}
					>
						<option value="" hidden>
							Please Select
						</option>
						<option value={'BUSINESS'}>Business</option>
						<option value={'ECONOMY'}>Economy</option>
					</select>
				</div>
			</div>

			<button
				className="addCity"
				type="submit"
				id="lws-addCity"
				onClick={handleFlightSubmit}
			>
				<svg
					width="15px"
					height="15px"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
				<span className="text-sm">Book</span>
			</button>
		</form>
	);
};

export default FlightBookingForm;
