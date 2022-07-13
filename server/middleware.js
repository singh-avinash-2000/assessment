const jwt = require('jsonwebtoken')

exports.authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization

	if (authHeader) {
		const token = authHeader.split(' ')[1]

		jwt.verify(token, process.env.SECRET, (err, user) => {
			if (err) {
				return res.error({
					statusCode: 403,
					error: { message: 'failed to authorize' },
				})
			}
			req.user = user.user
			next()
		})
	} else {
		return res.error({
			statusCode: 403,
			error: { message: 'failed to authorize' },
		})
	}
}
