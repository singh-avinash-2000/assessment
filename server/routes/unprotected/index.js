const authRoutes = require('./auth')

function registerUnprotectedRoutes(app, prefix) {
	app.use(prefix, authRoutes)
}

module.exports = registerUnprotectedRoutes
