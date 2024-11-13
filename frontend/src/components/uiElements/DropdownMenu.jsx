import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function DropdownMenu({ buttonLabel, items }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown open/close state
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-richblack-900 shadow-md ring-1 ring-inset ring-white hover:bg-richblack-50"
        >
          {buttonLabel}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-richblack-400"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition">
          <div className="py-1">
            {items.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-sm text-richblack-700 hover:bg-richblack-100 hover:text-richblack-900"
                  >
                    {item.label}
                  </a>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="block w-full px-4 py-2 text-left text-sm text-richblack-700 hover:bg-richblack-100 hover:text-richblack-900"
                  >
                    {item.label}
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
