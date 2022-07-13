import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import EmailOutlined from '@mui/icons-material/EmailOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

import InvisibleInput from '../../components/InvisibleInput'
import axios from 'axios'

function SignInForm() {
	const [visible, setVisible] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const iconStyle = {
		fontSize: '30px',
		color: 'gray',
	}

	const divStyle = {
		display: 'flex',
		padding: '10px',
		borderBottom: '1px solid lightgray',
	}

	function handleSubmit() {
		const reqBody = {
			email,
			password,
		}

		axios
			.post(process.env.REACT_APP_UP_BASE_URL + 'sign-in', reqBody)
			.then((res) => {
				localStorage.setItem('token', res.data.payload.token)
				navigate('/')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<form onSubmit={handleSubmit} style={{ width: '100%' }}>
				<h4>Enter email id</h4>
				<div style={divStyle}>
					<EmailOutlined
						style={{ ...iconStyle, marginRight: '20px' }}
					/>
					<InvisibleInput
						type='email'
						placeholder='ministry@government.in'
						value={email}
						setValue={setEmail}
					/>
				</div>
				<h4>Enter Password</h4>
				<div style={divStyle}>
					<LockOutlined
						style={{ ...iconStyle, marginRight: '20px' }}
					/>
					<InvisibleInput
						type={visible ? 'text' : 'password'}
						placeholder='Password'
						value={password}
						setValue={setPassword}
					/>
					{visible ? (
						<VisibilityOutlined
							style={{ ...iconStyle, cursor: 'pointer' }}
							onClick={() => setVisible(!visible)}
						/>
					) : (
						<VisibilityOffOutlined
							style={{ ...iconStyle, cursor: 'pointer' }}
							onClick={() => setVisible(!visible)}
						/>
					)}
				</div>
			</form>
			<div style={{ textAlign: 'center', marginTop: '50px' }}>
				<button
					style={{
						backgroundColor: '#031517',
						color: 'white',
						width: '150px',
						height: '50px',
						fontSize: 'large',
						borderRadius: '25px',
						fontWeight: 'bold',
						cursor: 'pointer',
					}}
					onClick={handleSubmit}
				>
					Sign In
				</button>
			</div>
		</>
	)
}

export default SignInForm
