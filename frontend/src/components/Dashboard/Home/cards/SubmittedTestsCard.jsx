import React, { useState } from 'react';
import { MoreHorizontal, Download } from 'lucide-react';

const MOCK_DATA = [
  {
    id: 1,
    name: 'Alex Shatov',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop',
    date: 'Dec 17, 2024',
    status: 'active',
    country: '🇺🇸',
  },
];

const SubmittedTestsCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Submitted Tests</h2>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border">
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                onClick={() => setShowDropdown(false)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs font-medium text-gray-500">
              <th className="pb-3 text-left">Student</th>
              <th className="pb-3 text-left">Submitted</th>
              <th className="pb-3 text-left">Status</th>
              <th className="pb-3 text-center">Country</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DATA.map((student) => (
              <tr key={student.id} className="border-b last:border-0">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{student.name}</span>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-500">{student.date}</td>
                <td className="py-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    {student.status}
                  </span>
                </td>
                <td className="py-3 text-center">{student.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedTestsCard;
