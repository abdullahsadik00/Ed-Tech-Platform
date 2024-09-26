const Otp = require('../models/Otp');
const User = require('../models/User');
const otpGenrator = require('otp-genrator');
const bcrypt = require('bcrypt');
const Profile = require('../models/Profile');

exports.sendOTP = async function (req, res) {
  try {
    const email = req.body.email;
    const ifUserPresent = await User.findOne({ email });
    if (ifUserPresent) {
      return res.status(401).json({
        hasError: true,
        message: 'User already exists.',
      });
    }
    let otp = otpGenrator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log('otp generated', otp);
    const result = await Otp.findOne({ otp: otp });
    while (result) {
      otp = otpGenrator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log('OTP created', otpBody);
    return res.status(200).json({
      hasError: false,
      message: 'OTP sent successfully.',
      otp: otp,
    });
  } catch (error) {
    console.error({
      hasError: true,
      error: error.message,
    });
    return res.status(500).json({
      hasError: true,
      message: 'Failed to send OTP.',
    });
  }
};

exports.signUp = async function (req, res) {
  try {
    const {
        firstName,
        lastName,
        email,
        contact,
        accountType,
        password,
        confirmPassword,
        otp,
      } = req.body;
    
      if (
        !firstName ||
        !lastName ||
        !email ||
        !contact ||
        !password ||
        !confirmPassword
      ) {
        return res.status(400).json({
          message: 'Please fill all the required fields',
          hasError: true,
        });
      }
      if (password !== confirmPassword) {
        return res.status(400).json({
          message: 'Passwords do not match',
          hasError: true,
        });
      }
      const isUserExsist = await User.findOne({ email });
      if (isUserExsist) {
        return res.status(400).json({
          message: 'Email already exists',
          hasError: true,
        });
      }
    
      const recentOTP = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
      console.log(recentOTP);
      if (recentOTP.length == 0) {
        return res.status(400).json({
          message: 'Invalid OTP',
          hasError: true,
        });
      } else if (recentOTP != otp) {
        return res.status(400).json({
          message: 'Invalid OTP',
          hasError: true,
        });
      }
    
      const hashedPassword = await bcrypt.hash(password,10);
    
      const profileDetails = await Profile.create({
        gender: null,
        dateOfBirth: null,
        about: null,
        contact: null,
      })
      const newUser = new User({
        firstName,
        lastName,
        email,
        contact,
        accountType,
        password: hashedPassword,
        additionalDetails:profileDetails._id,
        image:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`
      });
      return res.status.json({
        message: 'User created successfully',
        user: newUser,
        hasError: false,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to signup',
      hasError: true,
    });
  }
};
