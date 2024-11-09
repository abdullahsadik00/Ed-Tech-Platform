import React, { useEffect, useState } from 'react';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    const currentMonth = new Date(year, month);
    setDate(currentMonth);
  }, [month, year]);

  // Function to generate the calendar days
  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
    const lastDateOfPreviousMonth = new Date(year, month, 0).getDate();

    let days = [];

    // Add days from the previous month
    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push({
        date: lastDateOfPreviousMonth - i + 1,
        isCurrentMonth: false,
      });
    }

    // Add days of the current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      days.push({ date: i, isCurrentMonth: true, isToday });
    }

    // Add days from the next month
    for (let i = lastDayOfMonth; i < 6; i++) {
      days.push({ date: i - lastDayOfMonth + 1, isCurrentMonth: false });
    }

    return days;
  };

  // Handle next and previous month navigation
  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      // Decrease month
      let newMonth = month - 1;
      let newYear = year;
      if (newMonth < 0) {
        newMonth = 11; // Wrap to December
        newYear = year - 1;
      }
      setMonth(newMonth);
      setYear(newYear);
    } else if (direction === 'next') {
      // Increase month
      let newMonth = month + 1;
      let newYear = year;
      if (newMonth > 11) {
        newMonth = 0; // Wrap to January
        newYear = year + 1;
      }
      setMonth(newMonth);
      setYear(newYear);
    }
  };

  const days = generateCalendar();

  return (
    <div className="flex  ">
      <div className="bg-white  shadow-xl w-96">
        <header className="flex items-center justify-between p-6">
          <p className="text-xl font-medium">{`${months[month]} ${year}`}</p>
          <div className="flex space-x-2">
            <button
              className="p-2 py-2.5 text-richblack-600 hover:bg-richblack-100 rounded-md"
              onClick={() => handleNavigation('prev')}
            >
              <span className="material-symbols-rounded">&larr;</span>
            </button>
            <button
              className="p-2 text-richblack-600 hover:bg-richblack-100 rounded-md"
              onClick={() => handleNavigation('next')}
            >
              <span className="material-symbols-rounded">&rarr;</span>
            </button>
          </div>
        </header>

        <div className="p-4">
          <ul className="grid grid-cols-7 gap-1 text-center text-sm">
            <li className="font-medium">Sun</li>
            <li className="font-medium">Mon</li>
            <li className="font-medium">Tue</li>
            <li className="font-medium">Wed</li>
            <li className="font-medium">Thu</li>
            <li className="font-medium">Fri</li>
            <li className="font-medium">Sat</li>
          </ul>
          <ul className="grid grid-cols-7 gap-1 mt-4">
            {days.map((day, index) => (
              <li
                key={index}
                className={`relative text-center px-[7px] py-[12px] cursor-pointer font-normal rounded-md ${
                  day.isCurrentMonth
                    ? day.isToday
                      ? 'bg-[#4540df] text-white'
                      : 'text-richblack-800 hover:bg-richblack-100'
                    : 'text-richblack-100'
                }`}
              >
                {day.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
