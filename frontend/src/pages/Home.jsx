import React from 'react';
import img from '../assets/bg-university.jpg';
import img2 from '../assets/blob.png';
import s2 from '../assets/s2.jpg';
import d3 from '../assets/d3.jpg';
import s4 from '../assets/s4.jpg';
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
            <h1 className="text-3xl font-extrabold font-edu-sa mb-4 tracking-tight leading-none md:text-5xl lg:text-6xl">
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
      <section className="about-us w-full ">
        <div className="flex flex-col-reverse md:w-[85%] p-2 py-8 md:p-5 md:flex-row md:mx-auto 2xl:p-16">
          <div className="left bg-contain bg-no-repeat bg-center p-5 md:w-1/2" style={{ backgroundImage: `url(${img2})` }}>
            <div className="flex flex-row gap-2 justify-around">
              <div className='w-[170px] md:w-[230px] 2xl:w-[345px]'><img src={s4} alt="Description of second image" className='w-full rounded shadow-md	'/></div>
              <div className='w-[170px] md:w-[230px] pt-5 md:pt-10 2xl:w-[345px]'><img src={d3} alt="Description of second image" className='w-full rounded shadow-md	'/></div>
            </div>
          </div>
          <div className="right w-full md:w-1/2 p-5 my-auto">
            <div className='flex flex-col gap-3'>
              <p className="text-base md:text-lg font-bold font-inter text-richblack-300 uppercase">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-edu-sa tracking-tight leading-none">
                The roots of education are bitter, but the fruit is sweet
              </h2>
              <p>
                At Ed Tech Platform, we're passionate about making education accessible, engaging, and enjoyable for everyone. Our mission is to empower learners and educators with innovative tools that foster growth, creativity, and a lifelong love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

{/* <div className="flex md:w-[85%] mx-auto md:h-[400px] md:my-20 my-10 flex-col-reverse md:flex-row sm:relative">
          <div className="left w-full md:mb-0 m-4 md:w-1/2 relative bg-contain bg-no-repeat bg-center flex flex-row sm:space-x-4 justify-between"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="w-[130px]">
              <img src={s2} alt="Description of first image"  className='w-full rounded shadow-md	'/>
            </div>
            <div className="w-[130px] rounded ">
              <img src={s4} alt="Description of second image" className='w-full rounded shadow-md	'/>
            </div>
          </div>
          <div className="right w-full md:w-1/2 p-5 my-auto">
            <div className='flex flex-col gap-3'>
              <p className="text-base md:text-lg font-bold font-inter text-richblack-300 uppercase">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-edu-sa tracking-tight leading-none">
                The roots of education are bitter, but the fruit is sweet
              </h2>
              <p>
                At Ed Tech Platform, we're passionate about making education accessible, engaging, and enjoyable for everyone. Our mission is to empower learners and educators with innovative tools that foster growth, creativity, and a lifelong love for learning.
              </p>
            </div>
          </div>  
        </div> */}
