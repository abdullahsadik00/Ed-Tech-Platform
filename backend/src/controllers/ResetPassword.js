const User = require('../models/User');
const mailSender = require('../utils/mailSender');
const bcrypt = require('bcrypt');

// resetpasswordtoken
exports.resetPasswordToken = async (req, res) => {
  try {
    // get email from body and
    const { email } = req.body;
    // check and validate
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        hasError: true,
      });
    }

    // token
    const token = crypto.randomUUID();
    // update the user with token and expiration timestamp
    // create url
    const url = `https://localhost:3000/update-password/${token}`;
    // send email with url to user
    // save token in redis with expiration time
    user.findOneAndUpdate(
      {
        email: email,
      },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    // send email with link to reset password
    await mailSender(
      email,
      'Password reset link',
      `Click the link to reset your password: ${url}`
    );
    res.status(200).json({
      message: 'Reset password token sent successfully',
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send reset password token',
      hasError: true,
    });
  }
};

// Reset password

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;
    const User = await User.findOne({ token: token });
    if (!User) {
      return res.status(404).json({
        message: 'Token not found',
        hasError: true,
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Passwords do not match',
        hasError: true,
      });
    }
    if (User.resetPasswordExpires >= Date.now()) {
      return res.status(401).json({
        hasError: true,
        message: 'Token expired',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );
    return res.status(200).json({
      message: 'Password reset successfully',
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to reset password',
      hasError: true,
    });
  }
};
