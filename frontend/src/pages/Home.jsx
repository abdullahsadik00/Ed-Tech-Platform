import React from 'react';
import img from '../assets/bg-university.jpg';
import img2 from '../assets/blob.png';
import heroImg from '../assets/heroImg.png';
import Navbar from '../components/core/Home/Navbar';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className="relative w-screen h-[92vh] overflow-hidden font-inter flex flex-col md:flex-row justify-center items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-richblack-900 opacity-85"></div>
        {/* Content */}
        <div className="relative flex flex-col md:flex-row h-full text-white font-inter w-[85%] mx-auto">
          {/* Left Content */}
          <div className="left w-full md:w-1/2 flex justify-center flex-col h-full px-4">
            <h1 className="text-3xl font-extrabold font-edu-sa mb-4 tracking-tight leading-none md:text-5xl lg:text-6xl">
              Start Learning and Have Fun
            </h1>
            <p className="mb-6 text-base md:text-lg font-normal font-inter">
            Discover an exciting way to learn with our interactive and engaging platform. Whether you're a student or teacher, education has never been this fun.
            </p>
            <button className="font-inter py-1 px-1 font-medium bg-[#e9941f] text-white text-center w-[150px] border-2 border-[#e9941f] rounded">
              Discover More
            </button>
          </div>
          {/* Right Content */}
          <div className="right w-full md:w-1/2 flex items-end justify-center h-full relative">
            <div
              className="-mb-3 bg-contain bg-no-repeat bg-center h-[80%] w-full flex justify-center items-end "
              style={{ backgroundImage: `url(${img2})` }}
            >
              <img
                src={heroImg}
                alt="Description of the image"
                className=" max-w-[100%] h-auto mb-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
