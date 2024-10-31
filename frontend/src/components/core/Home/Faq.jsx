import React from 'react';

const Faq = () => {
  return (
    <section>
      <div className="relative w-full bg-white px-6 m-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <p className="text-base mt-5 md:text-lg font-bold font-lato text-richblack-300 uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {[
              {
                question: 'What is Ed-tech Platform?',
                answer:
                  'A comprehensive school/college management system that streamlines operations like student management, attendance, grades, fees, and communication in one platform.',
              },
              {
                question: 'How are student records managed?',
                answer:
                  'It maintains detailed student profiles with personal, academic, and attendance records that can be easily updated by authorized staff.',
              },
              {
                question: 'Can teachers track attendance?',
                answer:
                  'Yes, teachers can record and track attendance digitally, with automatic updates and notifications sent to parents for absentees.',
              },
              {
                question: 'How does the platform handle exams and grades?',
                answer:
                  'Create custom exam schedules, enter grades, generate report cards, and provide parents and students access to progress reports and transcripts.',
              },
              {
                question: 'Is fee management supported?',
                answer:
                  'Yes, with features like fee structures, payment tracking, online payments, and automated reminders for due fees.',
              },
              {
                question:
                  'Can parents and teachers communicate via the platform?',
                answer:
                  'Yes, through secure messaging, announcements, and notifications for updates on homework, exams, and events.',
              },
            ].map((item, index) => (
              <div key={index} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:bg-gray-100 p-2 rounded transition duration-200">
                    <span className="font-poppins">{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="font-lato mt-3 ">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
