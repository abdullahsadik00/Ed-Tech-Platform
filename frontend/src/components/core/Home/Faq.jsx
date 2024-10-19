import React from 'react';

const Faq = () => {
  return (
    <section>
      <div class="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div class="mx-auto px-5">
          <div class="flex flex-col items-center">
            <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
          </div>
          <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>  What is Ed-tech Platform?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                A comprehensive school/college management system that streamlines operations like student management, attendance, grades, fees, and communication in one platform.

</p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>How are student records managed?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                It maintains detailed student profiles with personal, academic, and attendance records that can be easily updated by authorized staff.


                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can teachers track attendance?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Yes, teachers can record and track attendance digitally, with automatic updates and notifications sent to parents for absentees.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How does the platform handle exams and grades?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Create custom exam schedules, enter grades, generate report cards, and provide parents and students access to progress reports and transcripts.


                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>  Is fee management supported?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Yes, with features like fee structures, payment tracking, online payments, and automated reminders for due fees.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can parents and teachers communicate via the platform?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Yes, through secure messaging, announcements, and notifications for updates on homework, exams, and events.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
