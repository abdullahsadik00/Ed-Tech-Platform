const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    moduleId: { type: mongoose.Types.ObjectId, ref: 'Module', required: true },
    order: { type: Number, required: true },
    videos: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        duration: { type: Number, required: true },
      },
    ],
    quizzes: [
      {
        title: { type: String, required: true },
        questions: [
          {
            type: String,
            required: true,
            answer: { type: String, required: true },
            options: [{ type: String, required: true }],
          },
        ],
      },
    ],
  }, { timestamps: true });


module.exports = mongoose.model('Section', SectionSchema);
