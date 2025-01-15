import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import React, { useState } from 'react';
import { HiMail, HiEye, HiEyeOff, HiUser } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SignUpOptions from './SignUpOptions';

const EmailTab = ({ onVerification }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(true); // Default state for role
  const [selectedRole, setSelectedRole] = useState('STUDENT'); // Default role

  // Handle role change (toggle between Student/Teacher)
  const handleRoleChange = () => {
    setIsChecked(!isChecked);
    setSelectedRole(isChecked ? 'INSTRUCTOR' : 'STUDENT');
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input values if necessary

    // Submit form data (email, firstName, lastName, password, role)
    console.log('Form Data submitted:', {
      firstName,
      lastName,
      email,
      password,
      role: selectedRole,
    });

    // Call the verification function
    onVerification();

    // Example of a network call (e.g., API call)
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role: selectedRole,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error during the network call:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : "Let's Get Started"}
            <span role="img" aria-label="rocket">
              {' '}
              🚀
            </span>
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Sign in to continue to your account'
              : 'Sign up to get started'}
          </p>
        </div>

        {showEmail ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="flex gap-3">
                <div className="relative group">
                  <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-50 text-slate-600 border border-gray-200 rounded-lg"
                    required
                  />
                </div>
                <div className="relative group">
                  <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-50 text-slate-600 border border-gray-200 rounded-lg"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="relative">
              <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-50 text-slate-600 border border-gray-200 rounded-lg"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-50 text-slate-600 border border-gray-200 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <HiEyeOff className="w-5 h-5" />
                ) : (
                  <HiEye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Role Toggle Button */}

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleRoleChange}
                className="peer sr-only"
              />
              <div className="peer flex h-8 items-center gap-4 rounded-full bg-primary-400 px-3 after:absolute after:left-1 after:h-6 after:w-16 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-[#4B5563] peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white">
                <span>Teacher</span>
                <span>Student</span>
              </div>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Continue
            </button>
          </form>
        ) : (
          <SignUpOptions handleEmailSignup={setShowEmail} />
        )}

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-gray-500">
          By continuing you agree to our&nbsp;
          <a href="#" className="text-gray-700 hover:underline">
            Terms & Conditions
          </a>
          &nbsp;and&nbsp;
          <a href="#" className="text-gray-700 hover:underline">
            Privacy Policy
          </a>
        </p>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailTab;
