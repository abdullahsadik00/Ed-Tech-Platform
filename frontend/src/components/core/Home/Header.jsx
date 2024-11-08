import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-2 ">
      <div className="flex items-center space-x-4 w-9/12">
        <h2 className="font-poppins text-[#171A1F] font-bold text-2xl">
          Good Morning, Sadik
        </h2>
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#f3f3f3] rounded-full pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search"
            />
          </div>
        </div>
        {/* <div>
          <input
            type="search"
            name=""
            id=""
            placeholder="sadik"
            className="outline-0 w-[200px] border border-blue-200"
          />
        </div> */}
      </div>
      <div className="header-right flex space-x-3">
        <div className="notification border border-white rounded-md shadow-md px-[11px] py-[8px]">
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
