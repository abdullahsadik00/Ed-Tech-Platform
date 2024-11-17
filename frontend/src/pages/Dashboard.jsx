import React, { useState } from 'react';
import Sidebar from '../components/core/Home/Sidebar';
import HomeContent from '../components/core/Home/HomeContent';
import Header from '../components/core/Home/Header';
import MyClasses from './MyClasses';
import TableComponent from './TableComponent';
import Grades from './Grades';
import TimeTable from './TimeTable';
import Courses from './Courses';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      {/* Main content area */}
      <div
        className={`flex-1 md:p-4 ${
          isSidebarCollapsed ? '' : ''
        } transition-all`}
      >
        <Header />
        {/* Render HomeContent only if Home button is clicked */}
        {activeIndex === 0 && <HomeContent />}
        {activeIndex === 1 && <MyClasses />}
        {activeIndex === 2 && <TableComponent />}
        {activeIndex === 3 && <Grades />}
        {activeIndex === 4 && <Courses />}
        {activeIndex === 5 && <TimeTable />}
      </div>
    </div>
  );
};

export default Dashboard;
