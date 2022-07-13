import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

function Toast(prop) {
	return (
		<Snackbar open={prop.open} autoHideDuration={6000} onClose={prop.close}>
			<Alert
				onClose={prop.close}
				severity={prop.severity}
				sx={{ width: '100%' }}
			>
				{prop.message}
			</Alert>
		</Snackbar>
	)
}

export default Toast
