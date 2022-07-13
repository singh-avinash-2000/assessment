import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import App from './App'
import TopBar from './components/TopBar'
import SignIn from './pages/sign_in'
import SignUp from './pages/sign_up'
import Redirect from './components/Redirect'
import AddMoment from './pages/add_moment'

function injectNavigation(OrignalComponent) {
	return (
		<>
			<TopBar />
			<div style={{ marginTop: '70px' }}></div>
			<OrignalComponent />
		</>
	)
}

function ProjectRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					exact
					element={
						<Redirect
							checkType='tokenAbsent'
							to='/sign-in'
							component={injectNavigation(App)}
						/>
					}
				/>
				<Route
					path='/new-moment'
					exact
					element={
						<Redirect
							checkType='tokenAbsent'
							to='/sign-in'
							component={injectNavigation(AddMoment)}
						/>
					}
				/>
				<Route
					path='/sign-in'
					exact
					element={
						<Redirect
							checkType='tokenPresent'
							to='/'
							component={<SignIn />}
						/>
					}
				/>
				<Route
					path='/sign-up'
					exact
					element={
						<Redirect
							checkType='tokenPresent'
							to='/'
							component={<SignUp />}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default ProjectRoutes
