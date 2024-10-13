import React from 'react';
import img from '../assets/bg-university.jpg';
import img2 from '../assets/blob.png';
import s2 from '../assets/s2.jpg';
import d3 from '../assets/d3.jpg';
import s4 from '../assets/s4.jpg';
import bg from '../assets/bg.jpg';
import heroImg from '../assets/heroImg.png';
import Navbar from '../components/core/Home/Navbar';
import Footer from '../components/core/Footer';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <section className="relative w-full h-[92vh] overflow-y-hidden font-inter flex flex-col md:flex-row justify-center items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-richblack-900 opacity-85"></div>
        {/* Content */}
        <div className="relative flex flex-col md:flex-row h-full text-white font-inter md:w-[85%] mx-auto">
          {/* Left Content */}
          <div className="left w-full md:w-1/2 flex justify-center flex-col h-full px-4">
            <h1 className="text-3xl font-extrabold font-edu-sa mb-4 tracking-tight leading-tight			 md:text-5xl lg:text-6xl">
              Start Learning and Have Fun
            </h1>
            <p className="mb-6 text-base md:text-lg font-normal font-inter">
              Discover an exciting way to learn with our interactive and
              engaging platform. Whether you're a student or teacher, education
              has never been this fun.
            </p>
            {/* <button className="font-inter py-1 px-1 font-medium bg-primary-orange text-white text-center w-[150px] border-2 border-primary-orange rounded hover:bg-white hover:text-primary-orange transition-colors duration-200"> */}

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
      </section>
      <section className="aboutUs w-full ">
        <div className="flex flex-col-reverse md:w-11/12 p-2 py-8 md:p-5 md:flex-row md:mx-auto 2xl:p-16">
          <div
            className="left bg-contain bg-no-repeat bg-center p-5 md:w-1/2"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="flex flex-row gap-2 justify-around">
              <div className='w-[170px] md:w-[230px] 2xl:w-[345px]'><img src={s4} alt="Description of second image" className='w-full rounded shadow-md	'/></div>
              <div className='w-[170px] md:w-[230px] pt-5 md:pt-10 2xl:w-[345px]'><img src={d3} alt="Description of second image" className='w-full rounded shadow-md	'/></div>
            </div>
          </div>
          <div className="right w-full md:w-1/2 p-5 my-auto">
            <div className="flex flex-col gap-3">
              <p className="text-base md:text-lg font-bold font-inter text-richblack-300 uppercase">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-edu-sa tracking-tight leading-tight			">
                The roots of education are bitter, but the fruit is sweet
              </h2>
              <p>
                At Ed Tech Platform, we're passionate about making education
                accessible, engaging, and enjoyable for everyone. Our mission is
                to empower learners and educators with innovative tools that
                foster growth, creativity, and a lifelong love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="whyChooseUs relative w-full font-inter flex p-2 py-8 md:p-5 flex-col md:flex-row justify-center items-end">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}
  ></div>
  <div className="absolute inset-0 bg-richblack-900 opacity-85"></div>
  <div className="z-10 flex flex-col md:w-11/12 p-2 py-8 md:p-5 md:flex-row md:mx-auto 2xl:p-16">
    <div className="right w-full md:w-1/2 p-5 my-auto">
      <div className="flex flex-col gap-3">
        <p className="text-base md:text-lg font-bold font-inter text-richblack-300 uppercase">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-edu-sa tracking-tight leading-tight			">
          Unlock Your Potential with Us
        </h2>
        <p className="mb-6 md:text-lg font-normal font-inter text-white">
          We believe in making education both engaging and accessible. By
          choosing us, you are stepping into a world of limitless
          possibilities, where learning meets innovation, and every
          challenge becomes an opportunity to grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card for Interactive Learning */}
          {Array(4).fill().map((_, index) => (
            <div key={index} className="rounded-md border border-white border-solid p-6 flex flex-col items-center space-y-4">
              <div className="rounded-full bg-white p-3 flex items-center justify-center">
                <span className="text-gray-500">icon</span>
              </div>
              <div className="text-center text-white">
                Interactive Learning
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div
      className="left bg-contain bg-no-repeat bg-center p-5 md:w-1/2 flex justify-center items-center	"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div className="w-9/12 ">
        <img
          src={s4}
          alt="Description of second image"
          className="w-full rounded shadow-md"
        />
      </div>
    </div>
  </div>
</section>




      <Footer />
    </div>
  );
};

export default Home;
