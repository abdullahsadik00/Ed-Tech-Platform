import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { CustomError } from '../utils/CustomError';
import prisma from '../config/prisma';
const otpGenrator = require('otp-generator');
const otpSchema = z.object({
  email: z.string().email(),
});

export const requestOTP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedEmail = otpSchema.parse(req.body);
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedEmail.email },
    });
    if (existingUser) {
      throw new CustomError(400, 'Email already registered');
    }
    const otp = otpGenrator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const newOTP = await prisma.oTP.create({
      data: {
        code: otp,
        type: 'EMAIL_VERIFICATION',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        email: validatedEmail.email,
      },
    });
    // Send OTP to validatedData.email
    // ...
    res
      .status(200)
      .json({ success: true, message: 'OTP sent successfully', data: newOTP });
  } catch (error) {}
};
