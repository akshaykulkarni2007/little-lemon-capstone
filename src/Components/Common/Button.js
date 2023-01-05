import './styles.css'

export const Button = ({ variant, type, classes, handleClick, children }) => (
	<button
		type={type ? type : 'button'}
		className={`btn ${variant} ${classes ? classes : ''}`}
		onClick={handleClick}>
		{children}
	</button>
)
