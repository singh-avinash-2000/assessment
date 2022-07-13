import React, { useCallback, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleOutLined from '@mui/icons-material/AccountCircleOutlined'

import Navigator from '../Navigator'
import NavigatorOptions from '../Navigator/NavigationOptions'

function TopBar() {
	const [drawerState, setDrawerState] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const open = Boolean(anchorEl)

	const handleProfileClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handlerProfileClose = () => {
		setAnchorEl(null)
	}

	function handleDrawerToggle() {
		setDrawerState(!drawerState)
	}

	return (
		<>
			<AppBar
				position='fixed'
				style={{
					backgroundColor: 'white',
					color: 'black',
					boxShadow: '5px 3px 4px whitesmoke',
				}}
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
					<IconButton
						style={{ marginLeft: 'auto' }}
						size='large'
						color='inherit'
						onClick={handleProfileClick}
					>
						<AccountCircleOutLined />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handlerProfileClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem
					onClick={handlerProfileClose}
					style={{
						color: 'black',
						fontWeight: '700',
						fontSize: 'large',
						textDecoration: 'none',
					}}
				>
					Profile
				</MenuItem>
				<MenuItem
					onClick={handlerProfileClose}
					style={{
						color: 'black',
						fontWeight: '700',
						fontSize: 'large',
						textDecoration: 'none',
					}}
				>
					Logout
				</MenuItem>
			</Menu>

			<Navigator
				state={drawerState}
				action={handleDrawerToggle}
				component={<NavigatorOptions />}
			/>
		</>
	)
}

export default TopBar
