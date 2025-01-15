"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OTPRouter = void 0;
const express_1 = require("express");
const otp_controller_1 = require("../controllers/otp.controller");
const router = (0, express_1.Router)();
exports.OTPRouter = router;
router.get('/requestOTP', otp_controller_1.requestOTP);
