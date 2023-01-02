import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { HomePage, BookingPage } from './Pages'
import { Header, Footer } from './Components'

import './App.css'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/booking' element={<BookingPage />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
