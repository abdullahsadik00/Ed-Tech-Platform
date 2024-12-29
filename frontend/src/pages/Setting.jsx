import React, { useState } from 'react';
import profile from '../assets/icons/profile.svg';
import Profile from '../components/setting/Profile';

const Setting = () => {
  const [index, setIndex] = useState(0);
  console.log(`Setting ${index}`);
  return (
    <div className="bg-[#4d525640]">
      <div className="flex border border-white rounded-md bg-white shadow-md mt-3">
        <div className="w-[256px] border-r-slate-700	 ">
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(0)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Profile</p>
          </div>
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(1)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Address</p>
          </div>
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(2)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Payment Methods</p>
          </div>
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(3)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Update Password</p>
          </div>
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(4)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Notifications</p>
          </div>
          <div
            className="flex gap-1 items-center px-3 py-4"
            onClick={() => setIndex(5)}
          >
            <div className="w-7 h-7 m-2">
              <img src={profile} alt="" className="w-full" />
            </div>
            <p>Bank Information</p>
          </div>
        </div>
        <div className="w-full px-4">
          complete options
          {index === 0 && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Setting;
