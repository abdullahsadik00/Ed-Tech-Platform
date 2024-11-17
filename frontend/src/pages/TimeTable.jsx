import React, { useState } from 'react';

// Utility function to get the start date (Sunday) of the current week
const getStartOfWeek = (date) => {
  const startDate = new Date(date);
  const day = startDate.getDay();
  const diff = startDate.getDate() - day; // Adjust the date to the previous Sunday
  startDate.setDate(diff);
  startDate.setHours(0, 0, 0, 0); // Set the time to midnight
  return startDate;
};

// Utility function to format the date (e.g., Nov 13, Mon)
const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  };
  return date.toLocaleDateString('en-US', options);
};

const TimeTable = () => {
  // State to track the current week starting date and direction of transition
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState('none'); // Default state (no transition)

  // Get the start of the current week (Sunday)
  const startOfWeek = getStartOfWeek(currentDate);

  // Function to move to the previous week
  const goToPreviousWeek = () => {
    setDirection('previous');
    setTimeout(() => {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() - 7); // Go back 7 days
      setCurrentDate(newDate);
    }, 300); // Delay the state update to sync with animation
  };

  // Function to move to the next week
  const goToNextWeek = () => {
    setDirection('next');
    setTimeout(() => {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + 7); // Go forward 7 days
      setCurrentDate(newDate);
    }, 300); // Delay the state update to sync with animation
  };

  // Generate an array of 7 dates for the current week (Sun to Sat)
  const weekDates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index); // Adjust the date for each day of the week
    return date;
  });

  // Generate the weekday names dynamically based on the current week's start day (Sunday)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section aria-labelledby="time-table-header" className="p-6">
      <h2 id="time-table-header" className="text-2xl font-semibold mb-4">
        TimeTable
      </h2>

      {/* Calendar Grid with Slide Animation */}
      <div
        className={`grid grid-cols-7 sm:grid-cols-7 lg:grid-cols-7 gap-6 bg-richblack-50 border border-white rounded-md p-4 py-6 transition-transform duration-300 ${
          direction === 'next'
            ? 'transform translate-x-full'
            : direction === 'previous'
            ? 'transform -translate-x-full'
            : ''
        }`}
      >
        {/* Left Arrow (For Previous Week Navigation) */}
        <div
          className="bg-blue-500 p-6 text-white w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
          aria-label="Previous"
          onClick={goToPreviousWeek}
        >
          &larr;
        </div>

        {/* Calendar Header - Weekdays */}
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 text-center text-sm font-semibold"
          >
            {day}
          </div>
        ))}

        {/* Calendar Dates */}
        {weekDates.map((date, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-6 text-white flex items-center justify-center flex-col"
          >
            <div>{formatDate(date).split(',')[0]}</div> {/* Month */}
            <div>{date.getDate()}</div> {/* Day */}
            <div>{formatDate(date).split(',')[1]}</div> {/* Weekday */}
          </div>
        ))}

        {/* Right Arrow (For Next Week Navigation) */}
        <div
          className="bg-blue-500 p-6 text-white w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
          aria-label="Next"
          onClick={goToNextWeek}
        >
          &rarr;
        </div>
      </div>
    </section>
  );
};

export default TimeTable;
