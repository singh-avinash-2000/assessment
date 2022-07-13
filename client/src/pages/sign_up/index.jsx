import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'

import SignUpForm from './SignUpForm'
import DualTone from '../../components/Template/DualTone'

function SignUp() {
	return (
		<DualTone>
			<Grid container></Grid>

			<Grid container spacing={0}>
				<Grid item xs={1} md={2}></Grid>
				<Grid item xs={10} md={8} style={{ margin: 'auto' }}>
					<h1 style={{ textAlign: 'center' }}>Sign Up</h1>
					<h3
						style={{
							textAlign: 'center',
							marginBottom: '70px',
						}}
					>
						To be a member
					</h3>
					<SignUpForm />
					<h3
						style={{
							textAlign: 'center',
							color: 'gray',
							textDecoration: 'none',
						}}
					>
						Already a member?{' '}
						<Link
							to='/sign-in'
							style={{
								textAlign: 'center',
								color: '#031517',
								textDecoration: 'none',
							}}
						>
							Sign In
						</Link>
					</h3>
				</Grid>
				<Grid item xs={1} md={2}></Grid>
			</Grid>
		</DualTone>
	)
}

export default SignUp
