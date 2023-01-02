import { Nav } from './Nav'

export const Header = () => (
	<header>
		<div className='container'>
			<div className='header-content flex'>
				<img src='logo.jpg' alt='little lemon logo' />

				<Nav />
			</div>
		</div>
	</header>
)
