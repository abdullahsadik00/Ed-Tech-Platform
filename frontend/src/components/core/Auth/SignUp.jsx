import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailTab from './EmailTab';
import VerificationModal from './VerificationModal';
import SignUpOptions from './SignUpOptions';

const SignUp = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-between p-8 bg-gray-50"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:w-1/2 items-center justify-center p-8"
      >
        <div className="relative w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="/lovable-uploads/09714a7f-1b23-4e57-9581-d3eabf67c3ab.png"
            alt="Sign up illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2"
      >
        <EmailTab onVerification={() => setShowVerificationModal(true)} />
      </motion.div>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </motion.div>
  );
};

export default SignUp;
