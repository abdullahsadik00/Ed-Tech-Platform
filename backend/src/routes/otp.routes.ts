import { Router } from 'express';
import { requestOTP } from '../controllers/otp.controller';
const router = Router();
router.get('/requestOTP', requestOTP);
// router.post('/api/verifyOTP', requestOTP);

export { router as OTPRouter };
