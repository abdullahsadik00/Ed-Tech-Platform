"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestOTP = void 0;
const zod_1 = require("zod");
const CustomError_1 = require("../utils/CustomError");
const prisma_1 = __importDefault(require("../config/prisma"));
const otpGenrator = require('otp-generator');
const otpSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
const requestOTP = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedEmail = otpSchema.parse(req.body);
        const existingUser = yield prisma_1.default.user.findUnique({
            where: { email: validatedEmail.email },
        });
        if (existingUser) {
            throw new CustomError_1.CustomError(400, 'Email already registered');
        }
        const otp = otpGenrator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        const newOTP = yield prisma_1.default.oTP.create({
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
    }
    catch (error) { }
});
exports.requestOTP = requestOTP;
