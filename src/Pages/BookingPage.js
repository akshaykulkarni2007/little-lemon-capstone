import { BookingForm } from '../Components/BookingForm'

export const BookingPage = ({ availableTimes, setAvailableTimes }) => {
	return (
		<section id="booking" className="booking-section">
			<div className="container">
				<BookingForm
					availableTimes={availableTimes}
					setAvailableTimes={setAvailableTimes}
				/>
			</div>
		</section>
	)
}
