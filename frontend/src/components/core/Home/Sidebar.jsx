import React, { useState } from 'react';
import User_circle from '../../../assets/icons/User_list.svg'; // Regular user icon
import User_list from '../../../assets/icons/User_list.png'; // Active/hovered user icon

const Sidebar = ({ setActiveIndex, activeIndex }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // List of menu items
  const menuItems = [
    'Home',
    'My Classes',
    'Profile',
    'Grades',
    'Settings',
    'Notifications',
    'Messages',
  ];

  // Handle click to set the active state
  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index when a menu item is clicked
  };

  return (
    <aside
      className={`w-64 bg-[#f8f8f8] text-wrap border border-white ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      } transition-all`}
    >
      <div className="p-4 text-2xl font-bold">Dashboard</div>
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute top-4 right-4 md:hidden bg-gray-500 text-white p-2 rounded"
      >
        {isSidebarCollapsed ? '>' : '<'}
      </button>
      <nav className="mt-5">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`py-2 px-4 my-2 mx-4 transition flex items-center hover:border hover:rounded-md rounded-md ${
                hoveredIndex === index || activeIndex === index
                  ? 'hover:bg-[#636AE8] hover:text-white border-[#636AE8] bg-[#636AE8] text-white'
                  : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)} // Set hover state on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset hover state on mouse leave
              onClick={() => handleClick(index)} // Set active state on click
            >
              <div className="mr-2">
                {/* Show the icon based on hover or active state */}
                <img
                  src={
                    hoveredIndex === index || activeIndex === index
                      ? User_list
                      : User_circle
                  }
                  alt={item}
                  className={`transition-all ${
                    isSidebarCollapsed ? 'w-6 h-6' : 'w-8 h-8'
                  }`}
                />
              </div>
              {!isSidebarCollapsed && (
                <span
                  className={`transition-all ${
                    isSidebarCollapsed ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {item}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
