const express = require('express')
const router = express.Router()

const {
	createMoment,
	uploadFile,
	fetchAll,
} = require('../../controller/moment')
const { upload } = require('../../helper/uploadHelper')

router.post('/upload', upload.single('file'), uploadFile)
router.post('/moment', createMoment)
router.get('/moment', fetchAll)

module.exports = router
