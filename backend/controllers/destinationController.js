// Importing schema of destination
const Destinations = require('../models/destinationModel')
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get all destinations
exports.getAllDestinations = async(req, res) => {
    const destinations = await Destinations.find();
    res.status(200).json({
        success:true,
        destinations
    })
}

// Create a destination
exports.createDestination = async(req, res) => {
    const destination = await Destinations.create(req.body)

    res.status(200).json({
        success: true,
        destination
    })
}

// Get destination details
exports.getDestinationDetails = async(req, res, next) => {
    const destination = await Destinations.findById(req.params.Id)

    if (!destination){
        return res.status(500).json({
            success: false,
            message: "Destination not found"
        })
    }
    else{
        res.status(200).json({
            success: true,
            destination
    })}
}

// Create New Review or Update the review
exports.createDestinationReview = catchAsyncErrors(async (req, res, next) => {
    const {rating, comment, destinationId} = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const destination = await Destinations.findById(destinationId);
  
    const isReviewed = destination.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      destination.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      destination.reviews.push(review);
      destination.numOfReviews = destination.reviews.length;
    }
  
    let avg = 0;
  
    destination.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    destination.ratings = avg / destination.reviews.length;
  
    await destination.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });
  
  // Get All Reviews of a destination
  exports.getDestinationReviews = catchAsyncErrors(async (req, res, next) => {
    const destination = await Destinations.findById(req.query.id);
  
    if (!destination) {
      return next(new ErrorHandler("destination not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: destination.reviews,
    });
  });
  
  // Delete Review
  exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const destination = await Destinations.findById(req.query.destinationId);
  
    if (!destination) {
      return next(new ErrorHandler("destination not found", 404));
    }
  
    const reviews = destination.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Destinations.findByIdAndUpdate(
      req.query.destinationId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
  });
