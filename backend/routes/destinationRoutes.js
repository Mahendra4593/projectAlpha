const express = require('express')
const {getAllDestinations, createDestination, getDestinationDetails,
createDestinationReview, getDestinationReviews, deleteReview} = require('../controllers/destinationController')
const {isAuthenticatedUser} = require("../middleware/auth")

const router = express.Router();

// Route for  getting all destinations
router.route('/destinations').get(getAllDestinations)

// Route for creating a destination
router.route('/destination').post(createDestination)

// Route for getting an destination by specific id
router.route('/destinations/:Id').get(getDestinationDetails)

// Route for writing a review 
router.route("/review").put(isAuthenticatedUser, createDestinationReview);

// Route for getting a deleting a review
router.route("/reviews").get(getDestinationReviews).delete(isAuthenticatedUser, deleteReview);

module.exports = router