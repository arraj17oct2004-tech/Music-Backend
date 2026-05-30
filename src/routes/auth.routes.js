// To handle all auth based APIs routes....
const express = require('express')
const router = express.Router()

// LocalModules - Controllers
const authController = require('../controllers/auth.controller')


// POST, '/api/auth/register' => api to register a user in our DB
router.post('/register',authController.registerUser )


// POST, '/api/auth/login' => api to login a registered user 
router.post('/login',authController.loginUser)

// POST , '/api/auth/logout' => api to logout a user 
router.post('/logout',authController.logoutUser)


module.exports = router