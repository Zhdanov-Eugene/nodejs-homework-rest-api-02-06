const express = require('express')
const { signin, signup, signout } = require('../../controllers/auth/')
const { autenticate } = require('../../midlewares/')

const router = express.Router()

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/signout', autenticate, signout)

module.exports = router
