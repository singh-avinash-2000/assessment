import { useState } from 'react'
import axios from 'axios'

import Grid from '@mui/material/Grid'

import EmailOutlined from '@mui/icons-material/EmailOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import InvisibleInput from '../../components/InvisibleInput'

function SignUpForm() {
	const [visible, setVisible] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [city, setCity] = useState('')
	const [password, setPassword] = useState('')
	const [toatOpen, setToastOpen] = useState(false)

	const iconStyle = {
		fontSize: '30px',
		color: 'gray',
	}

	const divStyle = {
		display: 'flex',
		padding: '10px',
		borderBottom: '1px solid lightgray',
	}

	async function handleSubmit() {
		const reqBody = {
			first_name: firstName,
			last_name: lastName,
			city: city,
			phone_number: phoneNumber,
			email: email,
			password: password,
		}

		axios
			.post(process.env.REACT_APP_UP_BASE_URL + 'sign-up', reqBody)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<h4>First Name</h4>
					<div style={divStyle}>
						<PersonOutlineOutlinedIcon
							style={{ ...iconStyle, marginRight: '20px' }}
						/>
						<InvisibleInput
							type='text'
							placeholder='Robert'
							value={firstName}
							setValue={setFirstName}
						/>
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<h4>Last Name</h4>
					<div style={divStyle}>
						<PersonOutlineOutlinedIcon
							style={{ ...iconStyle, marginRight: '20px' }}
						/>
						<InvisibleInput
							type='text'
							placeholder='Downey Jr.'
							value={lastName}
							setValue={setLastName}
						/>
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<h4>Mobile No.</h4>
					<div style={divStyle}>
						<LocalPhoneOutlinedIcon
							style={{ ...iconStyle, marginRight: '20px' }}
						/>
						<InvisibleInput
							type='text'
							placeholder='9876543210'
							value={phoneNumber}
							setValue={setPhoneNumber}
						/>
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<h4>Email - ID</h4>
					<div style={divStyle}>
						<EmailOutlined
							style={{ ...iconStyle, marginRight: '20px' }}
						/>
						<InvisibleInput
							type='text'
							placeholder='rdj@gmail.com'
							value={email}
							setValue={setEmail}
						/>
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<h4>Password</h4>
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
				</Grid>
				<Grid item xs={12} md={6}>
					<h4>City</h4>
					<div style={divStyle}>
						<LocationOnOutlinedIcon
							style={{ ...iconStyle, marginRight: '20px' }}
						/>
						<InvisibleInput
							type='text'
							placeholder='Pune'
							value={city}
							setValue={setCity}
						/>
					</div>
				</Grid>
			</Grid>
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
					Submit
				</button>
			</div>
		</>
	)
}

export default SignUpForm
