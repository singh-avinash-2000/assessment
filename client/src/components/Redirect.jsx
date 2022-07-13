import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect(props) {
	const navigate = useNavigate()
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (props.checkType == 'tokenPresent') {
			if (token) {
				navigate(props.to)
			}
		} else {
			if (!token) {
				navigate(props.to)
			}
		}
	}, [window.location])

	return props.component
}

export default Redirect
