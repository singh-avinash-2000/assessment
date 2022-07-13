const express = require('express')
const router = express.Router()

const { fetchUserData } = require('../../controller/user')

router.get('/user', fetchUserData)

module.exports = router
