const cloudinary = require('cloudinary').v2;

exports.uploadImagetoCloudinary = async function (
  file,
  folder,
  height,
  quality
) {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resourse_type = 'auto';
  return await cloudinary.upload(file.tempfilePath, options);
};
