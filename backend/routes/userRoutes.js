const express = require('express')
const {registerUser, loginUser, logout, forgotPassword, resetPassword,
updatePassword, getUserDetails} = require('../controllers/userController')
const {isAuthenticatedUser} = require('../middleware/auth')

const router = express.Router()

// Route for registering a new user
router.route('/register').post(registerUser)

// Route for login of a user
router.route('/login').post(loginUser)

// Route for forgot password
router.route("/password/forgot").post(forgotPassword);

// Route for reset password
router.route("/password/reset/:token").put(resetPassword);

// Route for logout of user
router.route('/logout').get(logout)

// Route for updating password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// route for geting a user deatails
router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router
