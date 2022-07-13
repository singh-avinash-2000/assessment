var mongoose = require('mongoose')

var momentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		tags: {
			type: [String],
		},
		file_name: {
			type: String,
			trim: true,
			unique: true,
		},
		user_id: {
			type: mongoose.Schema.ObjectId,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Moment', momentSchema)
