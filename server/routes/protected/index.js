const userRoutes = require('./user')
const momentRoutes = require('./moment')

function registerProtectedRoutes(app, prefix) {
	app.use(prefix, userRoutes)
	app.use(prefix, momentRoutes)
}

module.exports = registerProtectedRoutes
