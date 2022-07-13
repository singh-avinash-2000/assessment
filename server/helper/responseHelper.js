exports.responseHelper = function (req, res, next) {
	res.success = function ({
		payload = undefined,
		code = 200,
		message = undefined,
	}) {
		res.status(code).send({
			payload,
			message,
		})
	}

	res.error = function ({
		error = undefined,
		code = 400,
		message = undefined,
		result = undefined,
	}) {
		res.status(code).send({
			error,
			message,
			result,
		})
	}

	next()
}
