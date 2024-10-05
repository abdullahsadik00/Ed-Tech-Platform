const RatingAndReview = require('../models/RatingAndReview');
const User = require('../models/User');
const Course = require('../models/Course');

exports.createRatingAndReview = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId, rating, review } = req.body;
    if (!userId || !courseId || !rating || !review) {
      return res.status(400).json({
        hasError: true,
        message: 'Missing required fields',
      });
    }
    const isUserEnrolled = await Course.findOne({
      _id: course,
      studentEnrollment: { $eleMatch: { $eq: userId } },
    });
    if (!isUserEnrolled) {
        return res.status(404).json({
          hasError: true,
          message: 'User is not enrolled in the course',
        });
    }
    const isAlreadyReviewed = RatingAndReview.findById({user: userId,course: courseId})
    if (isAlreadyReviewed) {
        return res.status(400).json({
          hasError: true,
          message: 'User has already reviewed this course',
        });
    }
    const ratingAndReview = await RatingAndReview.create({
        user: userId,
        course: courseId,
        rating: rating,
        review: review,
    });
    await Course.findByIdAndUpdate({_id: courseId},{
        $push:{
            ratingsAndReviews: ratingAndReview._id
        }
    },{new:true})
    return res.status(201).json({
        hasError: false,
        data: ratingAndReview,
        message: 'Rating and review created successfully',
    });
  } catch (error) {
    return res.status(404).json({
      hasError: true,
      message: 'An error occurred while creating rating and review',
    });
  }
};
