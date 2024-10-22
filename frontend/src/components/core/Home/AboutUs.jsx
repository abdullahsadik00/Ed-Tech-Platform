import React from 'react';
import img from '../../../assets/bg-university.jpg';
import img2 from '../../../assets/blob.png';
import d3 from '../../../assets/d3.jpg';
import s4 from '../../../assets/s4.jpg';
const AboutUs = () => {
  return (
    <section className="aboutUs w-full ">
      <div className="flex flex-col-reverse md:w-11/12 p-2 py-8 md:p-5 md:flex-row md:mx-auto 2xl:p-16">
        <div
          className="left bg-contain bg-no-repeat bg-center p-5 md:w-1/2"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="flex flex-row gap-2 justify-around">
            <div className="w-[170px] md:w-[230px] 2xl:w-[345px]">
              <img
                src={s4}
                alt="Description of second image"
                className="w-full rounded shadow-md	"
              />
            </div>
            <div className="w-[170px] md:w-[230px] pt-5 md:pt-10 2xl:w-[345px]">
              <img
                src={d3}
                alt="Description of second image"
                className="w-full rounded shadow-md	"
              />
            </div>
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
  );
};

export default AboutUs;
