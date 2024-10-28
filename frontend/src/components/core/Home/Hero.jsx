import React from 'react';
import heroImg from '../../../assets/hero.png';
import bg from '../../../assets/bg.png';

const Hero = () => {
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pt-10">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">
              Start Learning and Have Fun
            </h1>
            <p className="mb-6 max-w-lg text-sm  sm:text-xl md:mb-10 lg:mb-12 font-lato">
              Discover an exciting way to learn with our interactive and
              engaging platform. Whether you're a student or teacher, education
              has never been this fun.
            </p>
            {/* Hero Button */}
            <div className="flex items-center">
              <a
                href="#"
                className="mr-5 items-center rounded-md bg-[#407BFF] px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8 font-lato"
              >
                Let's Talk
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src={bg}
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;