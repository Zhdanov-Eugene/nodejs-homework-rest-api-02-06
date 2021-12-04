const express = require('express')
const { current, updateAvatar } = require('../../controllers/users/')
const { autenticate, upload } = require('../../midlewares/')

const router = express.Router()

router.get('/current', autenticate, current)

router.patch('/avatars', autenticate, upload.single('avatar'), updateAvatar)

module.exports = router
