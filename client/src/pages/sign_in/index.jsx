import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'
import DualTone from '../../components/Template/DualTone'

function SignIn() {
	return (
		<DualTone>
			<Grid container spacing={0}>
				<Grid item xs={1} sm={4} md={4}></Grid>
				<Grid item xs={10} sm={4} md={3} style={{ margin: 'auto' }}>
					<h1 style={{ textAlign: 'center' }}>Sign In</h1>
					<h3
						style={{
							textAlign: 'center',
							marginBottom: '70px',
						}}
					>
						To start using the app
					</h3>
					<SignInForm />
					<h3
						style={{
							textAlign: 'center',
							color: 'gray',
							textDecoration: 'none',
						}}
					>
						Not a member?{' '}
						<Link
							to='/sign-up'
							style={{
								textAlign: 'center',
								color: '#031517',
								textDecoration: 'none',
							}}
						>
							Sign Up
						</Link>
					</h3>
				</Grid>
				<Grid item xs={1} sm={4} md={4}></Grid>
			</Grid>
		</DualTone>
	)
}

export default SignIn
