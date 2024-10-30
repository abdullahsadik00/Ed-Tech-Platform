import React, { useState } from 'react';
import signup1 from '../../../assets/img/signup1.png';
import mail from '../../../assets/icons/mail.png';
import lock from '../../../assets/icons/lock.png';
import show from '../../../assets/icons/show.png';
import hide from '../../../assets/icons/hide.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="SignUp w-full">
      <div className="flex items-center justify-center container mx-auto max-w-5xl md:max-w-4xl border-1 pt-10 pb-4 sm:mx-auto sm:max-w-2xl">
        <div className="right w-1/2 mr-10">
          <img src={signup1} alt="signup1" />
        </div>
        <div className="left w-1/2 border-white border rounded-md shadow-2xl ml-10 min-h-[500px]">
          <div className="p-8 max-h-[500px] pb-0">
            <div className="flex justify-between flex-col">
              <div>
                <h3 className="font-poppins text-[#171A1F] font-bold text-2xl">
                  Let's Get Started 🚀
                </h3>
                <p className="text-sm text-[#6E737E] font-lato mb-8">
                  Sign up your account
                </p>

                {isModalOpen && (
                  <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
                    <div className="modal-overlay absolute w-full h-full bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-end ">
                          <button
                            type="button"
                            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
                            onClick={toggleModal}
                          >
                            <span className="sr-only">Close</span>
                            <svg
                              className="shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-2xl text-center tracking-wide">
                            Almost done
                          </h3>
                          <p className="font-lato text">
                            Please type the code we sent you in your email
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>1</p>
                          </div>
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>2</p>
                          </div>
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>3</p>
                          </div>
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>4</p>
                          </div>
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>5</p>
                          </div>
                          <div className="border border-yellow-500 p-4 w-6 h-6 flex justify-center items-center">
                            <p>6</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold">Modal Title</p>
                        </div>
                        <p>
                          Modal content goes here. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nullam at purus urna.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="email">
                  <div className="relative mb-4">
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="pr-4 pl-10 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
                    />
                    <div className="absolute left-3 top-2.5">
                      <img
                        src={mail}
                        alt="mail icon"
                        className="w-5 h-5 left-3 top-2.5"
                      />
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="block w-full bg-[#F3F4F6] p-2.5 pl-10 pr-10 text-base text-gray-700 rounded-lg focus:bg-white focus:ring-[#636AE8]"
                      placeholder="Password"
                    />
                    <img
                      src={lock}
                      alt="lock icon"
                      className="w-5 h-5 absolute left-3 top-2.5"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-2.5 text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <img
                          src={show}
                          alt="Show password"
                          className="w-5 h-5"
                        />
                      ) : (
                        <img
                          src={hide}
                          alt="Hide password"
                          className="w-5 h-5"
                        />
                      )}
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-white w-full border-none bg-[#4148C6] hover:bg-[#636AE8] font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mb-4"
                    onClick={toggleModal}
                  >
                    Continue
                  </button>
                </div>

                <p className="text-[#9095A0] text-sm font-lato text-center leading-5 tracking-wide">
                  By continuing you agree to our <br />
                  <span className="text-[#323842] font-semibold">
                    Terms & Conditions&nbsp;
                  </span>
                  and&nbsp;
                  <span className="text-[#323842] font-semibold">
                    Privacy Policy
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={`text-[#9095A0] text-sm font-lato text-center leading-4 tracking-wide`}
                >
                  Already have an account?
                  <span className="text-[#323842] font-semibold">Log in</span>
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
