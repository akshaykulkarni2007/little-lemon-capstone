import { useState } from 'react'

import { TextInput, SelectInput, Button } from '../Common'

import { occasions } from '../../data'

import './styles.css'

export const BookingForm = ({ availableTimes, setAvailableTimes }) => {
	const [date, setDate] = useState()
	const [time, setTime] = useState()
	const [guests, setGuests] = useState(2)
	const [occasion, setOccasion] = useState(occasions[0].value)

	const changeTimeSlots = (e) => {
		setDate(e.target.value)
		setAvailableTimes({ type: 'DATE_CHANGE', payload: e.target.value })
	}

	return (
		<>
			<h1 className="booking-header">Book A Table</h1>

			<form>
				<TextInput
					type="date"
					label="Choose date"
					name="date"
					value={date}
					handleChange={changeTimeSlots}
				/>

				<SelectInput
					options={availableTimes}
					label="Choose time"
					name="time"
					value={time}
					handleChange={(e) => setTime(e.target.value)}
				/>

				<TextInput
					type="number"
					label="Number of guests"
					name="guests"
					min="1"
					max="10"
					value={guests}
					handleChange={(e) => setGuests(e.target.value)}
				/>

				<SelectInput
					options={occasions}
					label="Occasion"
					name="occation"
					value={occasion}
					handleChange={(e) => setOccasion(e.target.value)}
				/>

				<Button type="submit" variant="primary" handleClick={() => {}}>
					Make Your Reservation
				</Button>
			</form>
		</>
	)
}
