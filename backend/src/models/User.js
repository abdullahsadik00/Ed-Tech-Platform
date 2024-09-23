const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'student', 'instructor'],
  },
  additionalDetails: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Profile',
  },
  courses: { type: mongoose.Types.ObjectId, required: true, ref: 'Course' },
  image: { type: String, required: true },
  courseProgress: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'CourseProgress',
    },
  ],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
