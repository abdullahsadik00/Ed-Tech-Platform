const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const OTP = require('../models/Otp');
const User = require('../models/User');
const otpGenrator = require('otp-generator');
const Profile = require('../models/Profile');

exports.sendOTP = async (req, res) => {
  try {
    console.log('Send OTP Message', req.body);
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
    const result = await OTP.findOne({ otp: otp });
    console.log(result)
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
      data: otp,
    });
  } catch (error) {
    console.error({
      hasError: true,
      error: error.message,
    });
    return res.status(500).json({
      hasError: true,
      message: `Failed to send OTP. ${error}`,
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    console.log("Signup",req.body)
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
        hasError: true,
        message: 'Please fill all the required fields',
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        hasError: true,
        message: 'Passwords do not match',
      });
    }
    const isUserExsist = await User.findOne({ email });
    if (isUserExsist) {
      return res.status(400).json({
        hasError: true,
        message: 'Email already exists',
      });
    }
console.log('email: ' + email.toString());
    const recentOTP = await OTP.findOne({ email })
    console.log("recentOTP is now displaying",recentOTP);
     if (recentOTP.otp != otp) {
      return res.status(400).json({
        hasError: true,
        message: 'Invalid OTP',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contact: null,
    });
    const newUser = new User({
      firstName,
      lastName,
      email,
      contact,
      accountType,
      password: hashedPassword,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    return res.status(200).json({
      hasError: false,
      data: newUser,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      hasError: true,
      message: `Failed to signup ${error}`,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, password } = req.body;
    if (!user || !password) {
      return res.status(400).json({
        hasError: true,
        message: 'Please provide email and password',
      });
    }
    const isUserExist = await User.findOne({ email: user }).populate(
      'additionalDetails'
    );
    if (!isUserExist) {
      return res.status(401).json({
        hasError: true,
        message: 'Invalid email or password',
      });
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        isUserExist.password
      );
      if (isPasswordCorrect) {
        const payload = {
          role: isUserExist.role,
          email: isUserExist.email,
          id: isUserExist._id,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: '2h',
        });
        isUserExist.token = token;
        isUserExist.password = undefined;

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        };
        return res.cookie('token', token, options).status(200).json({
          hasError: false,
          message: 'Logged in successfully',
          user: isUserExist,
        });
      } else {
        return res.status(401).json({
          message: 'Invalid email or password',
          hasError: true,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to login',
      hasError: true,
    });
  }
};
