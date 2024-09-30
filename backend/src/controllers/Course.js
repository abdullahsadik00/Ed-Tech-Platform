const Course = require('../models/Course');
const Tags = require('../models/Tags');
const User = require('../models/User');
const uploadImagetoCloudinary = require('../utils/imageUploader');

exports.createCourse = async (req, res) => {
  try {
    const { courseName, courseDescription, whatYouwillLearn, tags, price } =
      req.body;

    const { thumbnail } = req.files.courseThumbnailImage;
    if (
      !courseName ||
      !courseDescription ||
      !tags ||
      !price ||
      !thumbnail ||
      !whatYouwillLearn
    ) {
      return res.status(400).json({
        message: 'All fields are required',
        hasError: true,
      });
    }
    const instructorId = req.user.id;
    const instructorDetails = User.findById(instructorId);
    if (!instructorDetails) {
      return res.status(404).json({
        message: 'Instructor not found',
        hasError: true,
      });
    }
    const tagsDetails = Tags.findById(tags);
    if (!tagsDetails) {
      return res.status(400).json({
        message: 'Tag not found',
        hasError: true,
      });
    }

    const thumbnailImageUploaded = await uploadImagetoCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    const newCourse = Course({
      courseName,
      courseDescription,
      whatYouwillLearn,
      tags: tagsDetails._id,
      price,
      thumbnail: thumbnailImageUploaded.secure_url,
      instructor: instructorDetails._id,
    });
    await User.findOneAndUpdate(
      instructorDetails._id,
      {
        $push: { courses: newCourse._id },
      },
      { new: true }
    );
    await Tags.findOneAndUpdate(
      { id: tagsDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      hasErrors: false,
      data: newCourse,
      message: 'Course created successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Failed to create course',
      hasError: true,
      error: error.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      { courseName: true, price: true, thumbnail: true, instructor: true }
    )
      .populate('instructor')
      .exec();
      if(allCourses.length){
        return res.status(200).json({
          hasErrors: false,
          data: allCourses,
          message: 'Courses fetched successfully',
        });
      }
  } catch (error) {
    return res.status(400).json({
      message: 'Failed to get courses',
      hasError: true,
      error: error.message,
    });
  }
};
