import React, { useState } from 'react';
import SidebarHeader from '../../Sidebar/sidebarHeader';
import SidebarItem from '../../Sidebar/SidebarItem';
import MobileMenuButton from '../../Sidebar/MobileMenuButton';
import { menuItems } from '../../Sidebar/menuItems';

const Sidebar = ({ setActiveIndex, activeIndex }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsMobileOpen(false);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <MobileMenuButton toggleMobileSidebar={toggleMobileSidebar} />

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-xl z-40
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <SidebarHeader
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
        />

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={item.label}
                item={item}
                index={index}
                isCollapsed={isCollapsed}
                activeIndex={activeIndex}
                onClick={handleItemClick}
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Content Margin */}
      <div
        className={`
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}
      `}
      />
    </>
  );
};

export default Sidebar;
// import React, { useState } from 'react';
// import {
//   Home,
//   GraduationCap,
//   UserCircle,
//   LineChart,
//   BookOpen,
//   Bell,
//   MessageCircle,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
// } from 'lucide-react';

// interface SidebarProps {
//   setActiveIndex: (index: number) => void;
//   activeIndex: number;
// }

// const menuItems = [
//   { label: 'Home', icon: Home },
//   { label: 'My Classes', icon: GraduationCap },
//   { label: 'Profile', icon: UserCircle },
//   { label: 'Grades', icon: LineChart },
//   { label: 'Courses', icon: BookOpen },
//   { label: 'Notifications', icon: Bell },
//   { label: 'Messages', icon: MessageCircle },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ setActiveIndex, activeIndex }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const handleItemClick = (index: number) => {
//     setActiveIndex(index);
//     setIsMobileOpen(false);
//   };

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleMobileSidebar = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={toggleMobileSidebar}
//         className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
//       >
//         <Menu className="w-6 h-6 text-gray-700" />
//       </button>

//       {/* Overlay for mobile */}
//       {isMobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsMobileOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-full bg-white shadow-xl z-40
//           transition-all duration-300 ease-in-out
//           ${isCollapsed ? 'w-20' : 'w-64'}
//           ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:translate-x-0
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between h-16 px-4 border-b">
//           <h1
//             className={`font-bold text-xl text-gray-800 transition-opacity duration-200
//             ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}
//           `}
//           >
//             Dashboard
//           </h1>
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-lg hover:bg-gray-100 hidden md:block"
//           >
//             {isCollapsed ? (
//               <ChevronRight className="w-5 h-5 text-gray-600" />
//             ) : (
//               <ChevronLeft className="w-5 h-5 text-gray-600" />
//             )}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="p-4">
//           <ul className="space-y-2">
//             {menuItems.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.label}>
//                   <button
//                     onClick={() => handleItemClick(index)}
//                     className={`
//                       w-full flex items-center px-3 py-2 rounded-lg
//                       transition-all duration-200 group
//                       ${
//                         activeIndex === index
//                           ? 'bg-indigo-600 text-white'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }
//                     `}
//                   >
//                     <Icon
//                       className={`
//                       w-5 h-5
//                       ${activeIndex === index ? 'text-white' : 'text-gray-600'}
//                       ${!isCollapsed && 'mr-3'}
//                     `}
//                     />
//                     <span
//                       className={`
//                       whitespace-nowrap
//                       ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
//                       transition-all duration-200
//                     `}
//                     >
//                       {item.label}
//                     </span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </aside>

//       {/* Content Margin */}
//       <div
//         className={`
//         transition-all duration-300 ease-in-out
//         ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}
//       `}
//       />
//     </>
//   );
// };

// export default Sidebar;
