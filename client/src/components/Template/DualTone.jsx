import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

function DualTone(props) {
	const logoLink = 'https://5d.solutions/img/logo_light.png'

	return (
		<>
			<div
				style={{
					backgroundColor: '#031517',
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: -1,
					textAlign: 'center',
				}}
			>
				<img
					src={logoLink}
					alt='logo'
					style={{ height: '75px', marginTop: '3%' }}
				></img>
			</div>
			<div
				style={{
					backgroundColor: 'white',
					width: '100%',
					height: '78%',
					position: 'absolute',
					bottom: 0,
					borderTopLeftRadius: '30px',
				}}
			>
				{props.children}
			</div>
		</>
	)
}

export default DualTone
