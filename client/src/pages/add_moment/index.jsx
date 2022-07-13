import Paper from '@mui/material/Paper'
import AddMomentForm from './AddMomentForm'

function AddMoment() {
	return (
		<>
			<Paper elevation={2} square style={{ margin: '50px' }}>
				<AddMomentForm />
			</Paper>
		</>
	)
}

export default AddMoment
