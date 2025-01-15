import { Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import React, { useState } from 'react';

const SignUpOptions = ({ handleEmailSignup }) => {
  return (
    <div className="space-y-4">
      <button
        onClick={handleEmailSignup}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Sign Up with Email
      </button>

      <button className="w-full flex items-center text-slate-600 justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
        <FcGoogle className="w-5 h-5" />
        Sign up with Google
      </button>

      <button className="w-full flex items-center text-slate-600 justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
        <FaFacebook className="w-5 h-5 text-blue-600" />
        Sign up with Facebook
      </button>

      <button className="w-full flex items-center text-slate-600 justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
        <FaApple className="w-5 h-5" />
        Sign up with Apple
      </button>
    </div>
  );
};

export default SignUpOptions;
