const express = require('express')
const {getAllDestinations, createDestination, getDestinationDetails,
createDestinatinReview, getDestinationReviews, deleteReview} = require('../controllers/destinationController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")

const router = express.Router();

// Route for  getting all destinations
router.route('/destinations').get(getAllDestinations)

// Route for creating a destination
router.route('/destination').post(createDestination)

// Route for getting an destination by specific id
router.route('/destinations/:Id').get(getDestinationDetails)

router.route("/review").put(isAuthenticatedUser, createDestinationReview);

router.route("/reviews").get(getDestinationReviews).delete(isAuthenticatedUser, deleteReview);

module.exports = router