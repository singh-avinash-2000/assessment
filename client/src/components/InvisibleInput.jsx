function InvisibleInput(props) {
	const inputStyle = {
		height: '32px',
		width: '100%',
		fontSize: '18px',
		border: '0px',
		outline: 'none',
	}

	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			style={inputStyle}
			value={props.value}
			onChange={(e) => {
				props.setValue(e.target.value)
			}}
		></input>
	)
}

export default InvisibleInput
