import { Link } from 'react-router-dom'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import Divider from '@mui/material/Divider'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function NavigatorOptions() {
	const logoLink =
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D0BAQFCDI57SvuDyg%2Fcompany-logo_200_200%2F0%2F1594615297141%3Fe%3D2159024400%26v%3Dbeta%26t%3DwUfUbD4IVxT3aoOsqRGMF1qQxuuezwKHvoBVDD1DG5Q&f=1&nofb=1'

	return (
		<div style={{ width: '350px' }}>
			<div
				style={{
					width: '100%',
					textAlign: 'center',
					marginBottom: '70px',
				}}
			>
				<img
					src={logoLink}
					alt='logo'
					style={{ height: '150px' }}
				></img>
			</div>
			<Accordion>
				<AccordionDetails>
					<Typography>
						<Link
							to='/sign-in'
							style={{
								color: 'black',
								fontWeight: '700',
								fontSize: 'large',
								textDecoration: 'none',
							}}
						>
							Profile
						</Link>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography
						style={{
							color: 'black',
							fontWeight: '700',
							fontSize: 'large',
							textDecoration: 'none',
						}}
					>
						Moments
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography style={{ marginLeft: '20px' }}>
						<Link
							to='/'
							style={{
								color: 'black',
								fontWeight: '700',
								fontSize: 'large',
								textDecoration: 'none',
							}}
						>
							Moment List
						</Link>
					</Typography>
					<Divider style={{ margin: '10px' }} />
					<Typography style={{ marginLeft: '20px' }}>
						<Link
							to='/new-moment'
							style={{
								color: 'black',
								fontWeight: '700',
								fontSize: 'large',
								textDecoration: 'none',
							}}
						>
							Add Moment
						</Link>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default NavigatorOptions
