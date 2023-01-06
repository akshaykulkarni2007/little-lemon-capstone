export const TextInput = ({
	type,
	label,
	name,
	value,
	touched,
	errors,
	handleChange,
	...rest
}) => {
	return (
		<div className="input-group">
			<label htmlFor={name} className="input-label">
				{label}
			</label>

			<input
				className="input-control"
				type={type}
				id={name}
				value={value}
				onChange={handleChange}
				{...rest}
			/>

			{touched && errors ? <div className="input-error">{errors}</div> : null}
		</div>
	)
}
