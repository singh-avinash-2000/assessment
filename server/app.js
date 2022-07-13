const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { v4: uuid } = require('uuid')
var morgan = require('morgan')

require('dotenv').config()

const unprotectedRoutes = require('./routes/unprotected')
const protectedRoutes = require('./routes/protected')
const { responseHelper } = require('./helper/responseHelper')
const { authenticateJWT } = require('./middleware')

async function appInstance() {
	try {
		const app = express()
		app.use(cors())
		app.use(helmet())
		app.use(bodyParser.json())
		app.use(morgan('tiny'))
		app.use(responseHelper)
		// app.use(cookieParser())

		// app.use(
		// 	session({
		// 		secret: '1234qwertasdfzxcvb',
		// 		resave: true,
		// 		saveUninitialized: false,
		// 		genid: function (req) {
		// 			return uuid()
		// 		},
		// 		cookie: {
		// 			maxAge: 60000 * 60 * 24,
		// 			sameSite: 'none',
		// 			domain: 'http://localhost:3000',
		// 			httpOnly: false,
		// 			hostOnly: false,
		// 		},
		// 	})
		// )

		unprotectedRoutes(app, '/up-api')
		app.use(authenticateJWT)
		protectedRoutes(app, '/p-api')

		// app.get('/user', function (req, res) {
		// 	res.cookie('cookieName', 83637, {
		// 		maxAge: 900000,
		// 		domain: 'http://localhost:3000',
		// 		httpOnly: false,
		// 	})
		// 	console.log(req.cookies)
		// 	console.log(req.session.user)
		// 	res.send(req.session.user)
		// })

		const res = await mongoose.connect(
			'mongodb://127.0.0.1:27017/5d_solutions'
		)

		if (res) {
			console.log('DB CONNECTED')
		}

		return app
	} catch (error) {
		console.log('DB CONNECTIONS FAILED')
	}
}

module.exports = appInstance
