const jwt = require('jsonwebtoken')

const User = require('../models/user')

const { SignUpSchema, SignInSchema } = require('../validation/auth')

exports.signUp = async function (req, res) {
	try {
		let rb = req.body

		const { error, value } = SignUpSchema.validate(rb)

		if (error) {
			console.log(error)
			return res.error({
				error: { message: 'Bad request' },
			})
		}

		rb = value

		const userInstance = new User(rb)

		await userInstance.save()

		return res.success({ statusCode: 200, message: 'You are registered' })
	} catch (err) {
		return res.error({
			error: { message: 'Record creation failed' },
		})
	}
}

exports.signIn = async function (req, res) {
	try {
		const { email, password } = req.body

		const { error, value } = SignInSchema.validate(req.body)

		if (error) {
			return res.error({
				error: { message: 'bad request' },
			})
		}

		const user = await User.findOne({ email })

		if (!user) {
			return res.error({ error: { message: 'Invalid email' } })
		}

		if (user.authenticate(password)) {
			delete user.encry_password
			delete user.salt

			const token = jwt.sign({ user }, process.env.SECRET)
			return res.success({
				statusCode: 200,
				message: 'Successfully logged in',
				payload: { token },
			})
		} else {
			return res.error({ error: { message: 'Wrong password' } })
		}
	} catch (err) {
		console.log(err)
		return res.error({
			error: { message: 'Something went wrong' },
		})
	}
}
