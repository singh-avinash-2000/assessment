var mongoose = require('mongoose')
const crypto = require('crypto')
const { v4: uuid } = require('uuid')

var userSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: true,
			maxlength: 32,
			trim: true,
		},
		last_name: {
			type: String,
			maxlength: 32,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		phone_number: {
			type: Number,
			validate: {
				validator: function (val) {
					return val.toString().length === 10
				},
				message: (val) => `${val.value} has to be 10 digits`,
			},
		},
		city: {
			type: String,
			trim: true,
		},
		encry_password: {
			type: String,
			required: true,
		},
		salt: String,
	},
	{ timestamps: true }
)

userSchema
	.virtual('password')
	.set(function (password) {
		this._password = password
		this.salt = uuid()
		this.encry_password = this.securePassword(password)
	})
	.get(function () {
		return this.password
	})

userSchema.methods = {
	authenticate: function (plainpassword) {
		return this.securePassword(plainpassword) === this.encry_password
	},

	securePassword: function (plainpassword) {
		if (!plainpassword) return ''
		try {
			return crypto
				.createHmac('sha256', this.salt)
				.update(plainpassword)
				.digest('hex')
		} catch (err) {
			return ''
		}
	},
}

module.exports = mongoose.model('User', userSchema)
