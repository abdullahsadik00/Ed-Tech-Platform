import React, { useState } from 'react';
import teacherWelcomeImg from '../assets/img/teacherWelcomeImg.png';
import DropdownMenu from '../components/uiElements/DropdownMenu';
import { report } from '../assets/data/report';

const getRemarks = (average) => {
  if (average >= 90) return 'Excellent';
  if (average >= 80) return 'Good';
  if (average >= 70) return 'Satisfactory';
  return 'Needs Improvement';
};

const Grades = () => {
  const [selectedExamType, setSelectedExamType] = useState('All'); // Default to 'All'

  // Generate menu items for DropdownMenu based on exam types
  const menuItems = [
    { label: 'All Exam Types', onClick: () => setSelectedExamType('All') },
    ...['unitTest', 'classTest', 'finalExam'].map((examType) => ({
      label: examType,
      onClick: () => setSelectedExamType(examType),
    })),
  ];

  // Filter grades data based on selected exam type
  const filteredGrades =
    selectedExamType === 'All'
      ? report.gradesData
      : report.gradesData.map((item) => ({
          ...item,
          exams: item.exams.filter(
            (exam) => exam.examType === selectedExamType
          ),
        }));

  // Aggregate exams for each subject
  const aggregateExams = (exams) => {
    const aggregated = { written: 0, oral: 0, practical: 0, total: 0 };
    exams.forEach((exam) => {
      if (exam.examName === 'written') aggregated.written += exam.grade;
      if (exam.examName === 'oral') aggregated.oral += exam.grade;
      if (exam.examName === 'practical') aggregated.practical += exam.grade;
    });
    return aggregated;
  };

  // Set button label based on selected exam type
  const buttonLabel =
    selectedExamType === 'All' ? 'Select Exam Type' : selectedExamType;

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="m-4 bg-gradient-to-r from-[#4c4ac7] to-[#736fe7] rounded-lg w-full h-28 flex items-center justify-between p-4 pr-0">
        <div className="flex w-[70%]">
          <p className="text-base font-normal font-lato tracking-wide text-white">
            Congratulations, you have secured the
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

      {/* Report Card Overview */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold text-richblack-700">
            Grade Summary
          </h3>
          {/* Pass buttonLabel dynamically to the DropdownMenu */}
          <DropdownMenu buttonLabel={buttonLabel} items={menuItems} />
        </div>

        {/* Grade Table */}
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
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Written</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Oral</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Practical</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Total</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Average</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Final Grade
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Remarks</div>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="text-sm divide-y divide-[#e4e4ea]">
                    {filteredGrades.map((item) => {
                      const aggregated = aggregateExams(item.exams);
                      const total =
                        aggregated.written +
                        aggregated.oral +
                        aggregated.practical;
                      const average = total / 3; // Assuming equal weight for all exam types
                      const remarks = getRemarks(average);

                      return (
                        <tr key={item.subject}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-richblack-800">
                              {item.subject}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {aggregated.written}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{aggregated.oral}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {aggregated.practical}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{total}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {average.toFixed(2)}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{item.finalGrade}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{remarks}</div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Grades;
