import React from 'react';
import teacherWelcomeImg from '../assets/img/teacherWelcomeImg.png';

// Sample Data for illustration purposes
const gradesData = [
  {
    subject: 'Math',
    grades: [90, 85, 88],
    total: 100,
    average: 87.67,
    finalGrade: 'A',
  },
  {
    subject: 'Science',
    grades: [80, 75, 78],
    total: 100,
    average: 77.67,
    finalGrade: 'B',
  },
  {
    subject: 'History',
    grades: [95, 92, 94],
    total: 100,
    average: 93.67,
    finalGrade: 'A',
  },
];

const renderGrades = (grades) => grades.join(', ');

const getRemarks = (average) => {
  if (average >= 90) return 'Excellent';
  if (average >= 80) return 'Good';
  if (average >= 70) return 'Satisfactory';
  return 'Needs Improvement';
};

const Grades = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="m-4 bg-gradient-to-r from-[#4c4ac7] to-[#736fe7] rounded-lg w-full h-28 flex items-center justify-between p-4 pr-0">
        <div className="flex w-[70%]">
          <p className="text-base font-normal font-lato tracking-wide text-white">
            Congratulation You have secured the
            <span className="font-bold ml-1 mr-1">First Place</span>
            with 80.71%
          </p>
        </div>
        <div className="w-[30%] h-[135px]">
          <img
            src={teacherWelcomeImg}
            alt="Teacher Welcome"
            className="h-full object-contain"
          />
        </div>
      </div>
      <h2 className="text-2xl font-poppins font-medium leading-5 tracking-wide">
        Student Report Card
      </h2>
      {/* Report Card Overview */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-richblack-700">
          Grade Summary
        </h3>

        <section className="antialiased text-richblack-600 mt-2 overflow-x-auto">
          <div className="flex flex-col justify-center h-full">
            <div className="w-full mx-auto bg-white rounded-lg border border-[#e4e4ea] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table-auto w-full rounded-lg">
                  {/* Table Header */}
                  <thead className="text-xs font-semibold uppercase text-richblack-400 bg-[#f9f9f1]">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Subject</div>
                      </th>
                      <th className="p-2 whitespace-nowrap" colSpan="3">
                        <div className="font-semibold text-center">Grades</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Total</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Average Grade
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Final Grade
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Remarks</div>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="text-sm divid e-y divide-[#e4e4ea]">
                    {/* Example Row 1 */}
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-richblack-800">
                          Math
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">90</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">85</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">88</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          100
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-yellow-500">
                          87.67
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-green-500">
                          A
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-green-500">
                          Excellent
                        </div>
                      </td>
                    </tr>
                    {/* Example Row 2 */}
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-richblack-800">
                          Science
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">80</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">75</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">78</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-yellow-500">
                          100
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-yellow-500">
                          77.67
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-yellow-500">
                          B
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-yellow-500">
                          Good
                        </div>
                      </td>
                    </tr>
                    {/* Example Row 3 */}
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-richblack-800">
                          History
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">95</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">92</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">94</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          100
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          93.67
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-green-500">
                          A
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center text-green-500">
                          Excellent
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Total Score & Remarks */}
      <div className="bg-gray-100 p-6 rounded-lg mt-6">
        <h3 className="text-xl font-semibold text-richblack-700 mb-4">
          Total Score & Remarks
        </h3>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-700">
            Total Average Score:{' '}
            <span className="text-2xl">
              {gradesData.reduce((acc, row) => acc + row.average, 0) /
                gradesData.length}
            </span>
          </div>
          <div className="text-lg font-semibold text-gray-700">
            Overall Performance:{' '}
            <span className="text-xl">
              {getRemarks(
                gradesData.reduce((acc, row) => acc + row.average, 0) /
                  gradesData.length
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
