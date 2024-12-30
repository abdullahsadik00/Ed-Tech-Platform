import React, { useState } from 'react';
import { format } from 'date-fns';

const TeacherProfileCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="border-b p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop"
            alt="Teacher avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">Monica Howard</h3>
            <p className="text-sm text-gray-500">Mathematics Teacher</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center">
          <h4 className="font-medium mb-2">{format(date, 'MMMM yyyy')}</h4>
          <div className="grid grid-cols-7 gap-1 text-sm">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 text-gray-500">
                {day}
              </div>
            ))}
          </div>
          {/* Simple calendar grid - you can enhance this further */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i}
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() =>
                  setDate(new Date(date.getFullYear(), date.getMonth(), i + 1))
                }
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileCard;
