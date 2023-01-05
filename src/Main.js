import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage, BookingPage } from './Pages'

export const initializeTimes = () => {
	return [
		{ value: '17:00', label: '17:00' },
		{ value: '18:00', label: '18:00' },
		{ value: '19:00', label: '19:00' },
		{ value: '20:00', label: '20:00' },
		{ value: '21:00', label: '21:00' },
		{ value: '22:00', label: '22:00' },
	]
}

export const updateTimes = (state, actions) => {
	return state
}

export const Main = () => {
	const [availableTimes, setAvailableTimes] = useReducer(
		updateTimes,
		initializeTimes()
	)
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route
					path="/booking"
					element={
						<BookingPage
							availableTimes={availableTimes}
							setAvailableTimes={setAvailableTimes}
						/>
					}></Route>
			</Routes>
		</main>
	)
}
