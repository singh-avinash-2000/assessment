const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '..', '/uploads'))
	},
	filename: function (req, file, cb) {
		var ext = path.extname(file.originalname)
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
		cb(null, file.fieldname + '-' + uniqueSuffix + ext)
	},
})

exports.upload = multer({
	storage: storage,
	fileFilter: function (req, file, callback) {
		var ext = path.extname(file.originalname)
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
			return callback(new Error('Only images are allowed'))
		}
		callback(null, true)
	},
	limits: {
		fileSize: 1024 * 1024,
	},
})
