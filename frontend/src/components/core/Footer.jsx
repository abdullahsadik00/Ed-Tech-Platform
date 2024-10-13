import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-richblack-800 text-white w-full">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Logo</h2>
          <p className="mt-2">Empowering education for everyone</p>
        </div>
        <div className="flex flex-col">
          
        <h2 className="text-2xl font-bold">Follow us</h2>
        
          <div className='flex flex-col md:flex-row md:space-x-4 mt-2'>
            <div className="#">T</div>
            <div className="#">L</div>
            <div className="#">F</div>
            <div className="#">I</div>
          </div>
        </div>
        <div>USefull Links</div>
        <div>Contact</div>
      </div>
    </footer>
  );
};

export default Footer;
