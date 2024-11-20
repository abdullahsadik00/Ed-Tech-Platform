import React, { useState } from 'react';
import User_circle from '../../../assets/icons/User_list.svg'; // Regular user icon
import User_list from '../../../assets/icons/User_list.png'; // Active/hovered user icon
import { motion } from 'framer-motion';

const Sidebar = ({ setActiveIndex, activeIndex }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // List of menu items
  const menuItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'My Classes', icon: '📚' },
    { label: 'Profile', icon: '👤' },
    { label: 'Grades', icon: '📊' },
    { label: 'Courses', icon: '📖' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Messages', icon: '💬' },
  ];

  // Handle click to set the active state
  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index when a menu item is clicked
    setIsSidebarCollapsed(false); // Close the sidebar when a menu item is clicked
  };

  return (
    <motion.aside
      // Add hover animation for list item scaling
      // whileHover={() => setIsSidebarCollapsed(false)}
      onMouseEnter={() => setIsSidebarCollapsed(true)} // Set the hovered index when mouse enters
      onMouseLeave={() => setIsSidebarCollapsed(true)} // Reset hovered index when mouse leaves\
      transition={{
        duration: 0.3, // Shorter transition duration for smoother effect
        ease: 'easeInOut', // Ease for a smooth effect
      }}
      animate={{
        width: isSidebarCollapsed ? '64px' : '256px', // Dynamically change width
        // opacity: isSidebarCollapsed ? 0.6 : 1, // Fade effect on collapse
      }}
      className={`bg-[#f8f8f8] text-wrap border border-white ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      } transition-all relative`}
    >
      {isSidebarCollapsed ? (
        <p>D</p>
      ) : (
        <div className="p-4 text-2xl font-bold">Dashboard</div>
      )}

      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute top-4 right-4 md:hidden bg-gray-500 text-white p-2 rounded"
      >
        {isSidebarCollapsed ? '>' : '<'}
      </button>
      <motion.nav
        className="mt-5"
        transition={{ duration: 5, delay: 1, ease: 'linear' }}
      >
        <ul>
          {menuItems.map((item, index) => (
            <motion.li
              animate={{
                // width: isSidebarCollapsed ? '4rem' : '16rem', // Dynamically change width
                opacity: isSidebarCollapsed ? 0.6 : 1, // Fade effect on collapse
              }}
              key={index}
              className={`py-2 px-4 my-2 mx-4 transition-all flex items-center hover:border hover:rounded-md ${
                hoveredIndex === index || activeIndex === index
                  ? 'bg-[#636AE8] text-white border-[#636AE8]'
                  : ''
              }`}
              // Add hover animation for list item scaling
              whileHover={() => setIsSidebarCollapsed(false)}
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index when mouse enters
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index when mouse leaves
              onClick={() => handleClick(index)} // Set active state on click
            >
              <div className="mr-2">
                {/* Show the icon based on hover or active state */}
                {isSidebarCollapsed ? (
                  <p>{item.icon}</p>
                ) : (
                  <img
                    src={
                      hoveredIndex === index || activeIndex === index
                        ? User_list
                        : User_circle
                    }
                    alt={item.label}
                    className={`transition-all ${
                      isSidebarCollapsed ? 'w-6 h-6' : 'w-8 h-8'
                    }`}
                  />
                )}
              </div>

              {/* Show label only when sidebar is expanded */}
              {!isSidebarCollapsed && (
                <span
                  className={`transition-all ${
                    isSidebarCollapsed ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.aside>
  );
};

export default Sidebar;
