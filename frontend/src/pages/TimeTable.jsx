import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TimeTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState('none');

  // Get current week dates
  const getWeekDates = () => {
    const dates = [];
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + 1); // Start from Monday
    console.log('start', start);

    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Sample lessons data
  const lessons = {
    0: [
      {
        id: '1',
        subject: 'Biology',
        time: '07:00 - 08:00',
        teacher: 'James Gause',
        icon: '🧬',
        color: 'bg-orange-100',
      },
      {
        id: '2',
        subject: 'Add Lesson',
        time: '',
        teacher: '',
        icon: '+',
        color: 'bg-gray-50',
      },
    ],
    1: [
      {
        id: '3',
        subject: 'Ecology',
        time: '08:30 - 09:00',
        teacher: 'Jessica Hob',
        icon: '🌿',
        color: 'bg-green-100',
      },
    ],
    // Add more lessons for other days...
  };

  const navigateWeek = (direction) => {
    setDirection(direction);
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const weekDates = getWeekDates();

  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-8">Timetable</h1>

      <div className="relative overflow-hidden">
        <div
          className={`grid grid-cols-7 gap-4 transition-transform duration-300 ${
            direction === 'next'
              ? 'translate-x-full'
              : direction === 'prev'
              ? '-translate-x-full'
              : ''
          }`}
        >
          {/* Date Navigation */}
          <div className="col-span-7 flex items-center justify-between mb-6">
            <button
              onClick={() => navigateWeek('prev')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-7 flex-1 px-4">
              {weekDates.map((date, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center p-2 ${
                    date.toDateString() === new Date().toDateString()
                      ? 'bg-primary/10 rounded-lg'
                      : ''
                  }`}
                >
                  <span className="text-sm text-gray-500">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span className="text-xl font-semibold">
                    {date.getDate()}
                  </span>
                  <span className="text-xs text-gray-500">Now</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigateWeek('next')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {/* Timetable Grid */}
          {weekDates.map((date, dayIndex) => (
            <div key={dayIndex} className="space-y-4">
              {(lessons[dayIndex] || []).map((lesson, lessonIndex) => (
                <div
                  key={`${dayIndex}-${lessonIndex}`}
                  className={`p-4 rounded-xl transition-all duration-200 ${
                    lesson.color
                  } ${
                    lesson.subject === 'Add Lesson'
                      ? 'border-2 border-dashed border-gray-200 hover:border-gray-300 cursor-pointer'
                      : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{lesson.subject}</h3>
                      {lesson.time && (
                        <>
                          <p className="text-sm text-gray-500 mt-1">
                            {lesson.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            {lesson.teacher}
                          </p>
                        </>
                      )}
                    </div>
                    {lesson.subject === 'Add Lesson' ? (
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400">
                        {lesson.icon}
                      </span>
                    ) : (
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        {lesson.icon}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {(!lessons[dayIndex] || lessons[dayIndex].length === 0) && (
                <div className="p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">Add Lesson</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
