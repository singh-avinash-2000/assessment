exports.fetchUserData = function (req, res) {
	const { user } = req
	return res.success({
		statusCode: 200,
		payload: { user },
		message: 'details fetched successfully',
	})
}
