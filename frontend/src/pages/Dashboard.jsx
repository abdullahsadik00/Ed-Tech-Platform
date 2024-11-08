import React, { useState } from 'react';
import Sidebar from '../components/core/Home/Sidebar';
import HomeContent from '../components/core/Home/HomeContent';
import Header from '../components/core/Home/Header';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      {/* Main content area */}
      <div className="flex-1 p-4">
        <Header />
        {/* Render HomeContent only if Home button is clicked */}
        {activeIndex === 0 && <HomeContent />}
      </div>
    </div>
  );
};

export default Dashboard;
