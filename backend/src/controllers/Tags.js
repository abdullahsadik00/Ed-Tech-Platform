const Tags = require('../models/Tags');

exports.addTag = async (req, res) => {
  try {
    // validate request body
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        hasError: true,
        message: 'Name and description are required',
      });
    }
    const tag = await Tags.create({
      name,
      description,
    });
    res.status(201).json({
      hasError: false,
      data: tag,
      message: 'Tag added successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tags.find({}, { name: true, description: true });
    res.json({
      hasError: false,
      data: tags,
      message: 'All tags retrieved successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
