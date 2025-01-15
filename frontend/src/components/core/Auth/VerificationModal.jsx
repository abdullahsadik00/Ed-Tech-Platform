import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const VerificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-xl max-w-md w-full mx-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X />
            </button>

            <div className="text-center space-y-4">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-semibold text-gray-900"
              >
                Almost done
              </motion.h2>
              <p className="text-gray-600">
                Please type the code we sent you in your email
              </p>

              <div className="flex gap-2 justify-between my-8">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.input
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-100 text-green-800 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 relative group flex items-center justify-center"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-green-600"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Verify
                </span>
              </motion.button>

              <div className="text-sm text-gray-500 mt-4">32:06</div>

              <div className="text-sm text-gray-600 mt-4">
                Can't access to your email?{' '}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Contact support
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VerificationModal;
