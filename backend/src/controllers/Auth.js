const Otp = require('../models/Otp');
const User = require('../models/User');
const otpGenrator = require('otp-genrator');

exports.sendOTP = async function () {
  try {
    const email = req.body.email;
    const ifUserPresent = await User.findOne({ email });
    if (ifUserPresent) {
      return req.status(401).json({
        hasError: true,
        message: 'User already exists.',
      });
    }
    var otp = otpGenrator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets :false,
        specialChars :false,
    })

    console.log("otp generated",otp);
    const result = await Otp.findOne({ otp: otp });
    while (result) {
        otp = otpGenrator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets :false,
            specialChars :false,
        })
        result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = {email,otp}
    const otpBody = await OTP.create(otpPayload)
    console.log("OTP created", otpBody);
    return req.status(200).json({
      hasError: false,
      message: 'OTP sent successfully.',
      otp:otp
    });
  } catch (error) {
    console.error({
      hasError: true,
      error: error.message,
    });
    return req.status(500).json({
      hasError: true,
      message: 'Failed to send OTP.',
    });
  }
};
