import React from 'react';
import img from '../assets/bg-university.jpg';
import img2 from '../assets/blob.png';

const Home = () => {
  return (
    <div>
      <div className="relative w-screen min-h-screen overflow-hidden font-inter">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-richblack-900 opacity-80"></div>

        {/* Content */}
        <div className="relative flex h-full text-white font-inter">
          <div className="left w-1/2"></div>
          <div className="right w-1/2 flex items-end justify-center h-full"> {/* Added h-full */}
            <img src={img2} alt="Description of the image" className="mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
