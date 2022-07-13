const appInstance = require('./app')

async function init() {
	try {
		const app = await appInstance()
		const port = process.env.PORT || 8000

		app.listen(port, () => {
			console.log(`server started at -> http://localhost:${port}`)
		})
	} catch (err) {
		console.log(err)
	}
}

init()
