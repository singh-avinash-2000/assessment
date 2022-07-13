const Moment = require('../models/moments')
const { CreateMomentSchema } = require('../validation/auth')

exports.fetchAll = async function (req, res) {
	try {
		const user = req.user
		const moments = await Moment.find({ user_id: user._id })

		res.success({
			statusCode: 200,
			message: 'moments fetch successfully',
			payload: moments,
		})
	} catch (err) {
		console.log(err)
		return res.error({
			statusCode: 500,
			error: { message: 'something went wrong' },
		})
	}
}

exports.createMoment = async function (req, res) {
	try {
		const rb = req.body
		const user = req.user

		const { error, value } = CreateMomentSchema.validate(req.body)

		if (error) {
			console.log(error)
			return res.error({
				error: { message: 'bad request' },
			})
		}
		rb.user_id = user._id

		const moment = new Moment(rb)
		await moment.save()

		return res.success({
			statusCode: 200,
			message: 'Moment created successfully',
			payload: moment,
		})
	} catch (err) {
		console.log(err)
		return res.error({
			statusCode: 500,
			error: { message: 'something went wrong' },
		})
	}
}

exports.uploadFile = async function (req, res) {
	try {
		return res.success({
			statusCode: 200,
			message: 'Image uploaded successfully',
			payload: { fileName: req.file.filename },
		})
	} catch (error) {
		console.log(error)
		return res.error({
			statusCode: 500,
			error: { message: 'something went wrong' },
		})
	}
}
