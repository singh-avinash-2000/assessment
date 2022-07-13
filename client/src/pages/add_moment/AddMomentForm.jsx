import { Chip, CircularProgress } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import InvisibleInput from '../../components/InvisibleInput'
import { useNavigate } from 'react-router-dom'
import Toast from '../../components/Toast'

function AddMomentForm() {
	const [tags, setTags] = useState([])
	const [title, setTitle] = useState('')
	const [tagInput, setTagInput] = useState('')
	const [fileName, setFileName] = useState('')
	const [key, setKey] = useState('')
	const [loading, setLoading] = useState(false)

	const [toastState, setToastState] = useState(false)
	const [message, setMessage] = useState('')
	const [severity, setSeverity] = useState('')

	const navigate = useNavigate()

	const inputStyle = {
		height: '32px',
		width: '100%',
		fontSize: '18px',
		border: '0px',
		outline: 'none',
	}

	function handleTagInput(e) {
		setTagInput(e.target.value)
	}

	function handleKeyDown(e) {
		if (e.keyCode == 13) {
			if (tagInput.trim()) {
				setTags([...tags, tagInput.trim()])
				setTagInput('')
			}
		}
	}

	function uploadFile(event) {
		setLoading(true)
		const file = event.target.files[0]
		const formData = new FormData()
		formData.append('file', file)

		const token = localStorage.getItem('token')
		axios({
			// Endpoint to send files
			url: process.env.REACT_APP_P_BASE_URL + 'upload',
			method: 'POST',
			headers: {
				// Add any auth token here
				Authorization: 'Bearer ' + token,
			},
			// Attaching the form data
			data: formData,
		})
			.then((res) => {
				setToastState(true)
				setMessage('Image uploaded successfully')
				setSeverity('success')

				setFileName(res.data.payload.fileName)
				setLoading(false)
			})
			.catch((err) => {
				setToastState(true)
				setMessage(err.error.message)
				setSeverity('error')
				setKey('')

				setLoading(false)
			})
	}

	function handleSubmit() {
		const reqBody = {
			title,
			tags,
			file_name: fileName,
		}
		const token = localStorage.getItem('token')
		axios({
			// Endpoint to send files
			url: process.env.REACT_APP_P_BASE_URL + 'moment',
			method: 'POST',
			headers: {
				// Add any auth token here
				Authorization: 'Bearer ' + token,
			},
			// Attaching the form data
			data: reqBody,
		})
			.then((res) => {
				setToastState(true)
				setMessage('Moment added successfully')
				setSeverity('success')

				setTags([])
				setTitle('')
				setTagInput('')
				setFileName('')
				setKey(Math.random())
			})
			.catch((err) => {
				setToastState(true)
				setMessage(err.response.data.error.message)
				setSeverity('error')
			})
	}

	return (
		<div style={{ padding: '50px' }}>
			<h3>Add new moment</h3>
			<h4>Title</h4>
			<div style={{ borderBottom: '1px solid gray' }}>
				<InvisibleInput
					type='text'
					placeholder='Moment Title'
					value={title}
					setValue={setTitle}
				/>
			</div>
			<h4>Tags</h4>
			<div style={{ borderBottom: '1px solid gray' }}>
				<input
					style={inputStyle}
					type='text'
					placeholder='Robert'
					value={tagInput}
					onChange={handleTagInput}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{tags.map((t, i) => (
					<Chip key={i} style={{ margin: '5px' }} label={t} />
				))}
			</div>
			<h4>Upload</h4>
			<div>
				<input
					type='file'
					accept='image/*'
					key={key}
					onChange={uploadFile}
				/>
				{loading && <CircularProgress />}
			</div>
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
			<Toast
				open={toastState}
				message={message}
				close={() => {
					setToastState(!toastState)
				}}
				severity={severity}
			/>
		</div>
	)
}

export default AddMomentForm
