import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import axios from 'axios'

const App = () => {
	const [rowData] = useState([
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
	])

	const [columnDefs] = useState([
		{ field: 'make' },
		{ field: 'model' },
		{ field: 'price' },
	])

	async function fetchAllMoments() {
		try {
			const token = localStorage.getItem('token')
			const moments = await axios({
				url: process.env.REACT_APP_P_BASE_URL + 'moment',
				method: 'get',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})

			console.log(moments)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchAllMoments()
	})

	return (
		// <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
		// 	<AgGridReact
		// 		rowData={rowData}
		// 		columnDefs={columnDefs}
		// 	></AgGridReact>
		// </div>
		<h1>Home Page</h1>
	)
}

export default App
