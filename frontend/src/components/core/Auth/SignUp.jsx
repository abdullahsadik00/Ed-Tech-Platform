import React, { useState } from 'react';
import signup1 from '../../../assets/img/signup1.png';
import mail from '../../../assets/icons/mail.png';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [tabs, setTabs] = useState({
    onBoard: false,
    email: true,
    facebook: false,
    google: false,
  });
  console.log(tabs);
  console.log('tabs.onBoard', tabs.onBoard);
  const getMarginClass = () => {
    if (tabs.onBoard) return 'mt-16';
    if (tabs.email) return 'mt-44   ';
    if (tabs.facebook) return 'mt-4';
    if (tabs.google) return 'mt-2';
    return '';
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <section className=" SignUp w-full ">
      <div className="flex items-center justify-center container mx-auto max-w-5xl  md:max-w-4xl border-1 pt-10 pb-4 sm:mx-auto sm:max-w-2xl">
        <div className="right w-1/2  mr-10">
          <img src={signup1} alt="signup1" />
        </div>
        <div className="left w-1/2 border-white border rounded-md shadow-2xl ml-10 min-h-[500px] ">
          <div className="p-8 max-h-[500px] pb-0">
            <div className="flex justify-between flex-col">
              <div>
                <h3 className="font-poppins text-[#171A1F] font-bold text-2xl">
                  Let's Get Started 🚀
                </h3>
                <p className="text-sm text-[#6E737E] font-lato mb-8">
                  Sign up your account
                </p>

                {false ? (
                  <div>
                    <button
                      type="button"
                      className="text-white w-full bg-[#3C43C1] hover:bg-[#3C43C1] focus:ring-4 focus:ring-[#3C43C1] font-medium rounded-lg text-sm px-5 py-2.5 me-2  focus:outline-none flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-20" />
                        <path d="M12 2v20" />
                        <path d="M2 12l10-10 10 10" />
                      </svg>
                      Sign Up with Email
                    </button>
                    <button
                      type="button"
                      className="text-[#DB4437] w-full border border-[#DB4437] hover:bg-[#DB4437] hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-20" />
                        <path d="M12 2v20" />
                        <path d="M2 12l10-10 10 10" />
                      </svg>
                      Sign up with Google
                    </button>
                    <button
                      type="button"
                      className="text-[#4267B2] w-full border border-[#4267B2] hover:bg-[#4267B2] hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-20" />
                        <path d="M12 2v20" />
                        <path d="M2 12l10-10 10 10" />
                      </svg>
                      Sign up with Facebook
                    </button>
                    <button
                      type="button"
                      className="text-white w-full bg-[#3C43C1] hover:bg-blue-800 focus:ring-4 focus:ring-[#3C43C1] font-medium rounded-lg text-sm px-5 py-2.5 me-2  focus:outline-none flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-20" />
                        <path d="M12 2v20" />
                        <path d="M2 12l10-10 10 10" />
                      </svg>
                      Sign up with Google
                    </button>
                  </div>
                ) : (
                  <div className="email ">
                    {/* Email Input */}
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="pr-4 pl-10 py-2.5 text-sm text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      />
                      <div className="absolute left-3 top-2.5">
                        <img src={mail} alt="mail icon" className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-4">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="block w-full p-2.5 pl-10 pr-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                      />
                      <svg
                        className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3v2m6 4h-2m-4 0h-2m8 8v-2m-4-4H8m6 6v-2m-6 0H4m2-4h16m-2-4H6M6 3h2M12 3h2" />
                      </svg>
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2.5 text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17.94 17.94l-1.414-1.414M6.343 6.343L4.929 4.929M12 12l3.293 3.293a8.956 8.956 0 001.387-1.387M2.086 12C3.7 7.636 7.44 4.5 12 4.5c2.613 0 5.016.807 7.063 2.134M12 12l-3.293-3.293A8.956 8.956 0 007.293 6.343M12 12l-3.293 3.293a8.956 8.956 0 01-1.387 1.387M21.914 12c-1.614 4.364-5.354 7.5-10.914 7.5C7.474 19.5 5.16 18.134 3.137 16.406" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 3c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm0 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 8.5c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                )}
                <p className=" text-[#9095A0] text-sm font-lato text-center leading-5 tracking-wide ">
                  By continuing you agree to our <br />
                  <span className="text-[#323842] font-semibold ">
                    Terms & Conditions&nbsp;
                  </span>
                  and&nbsp;
                  <span className="text-[#323842] font-semibold ">
                    Privacy Policy
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={`text-[#9095A0] text-sm font-lato text-center leading-4 tracking-wide ${getMarginClass()}`}
                >
                  Already have an account?
                  <span className="text-[#323842] font-semibold ">Log in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
