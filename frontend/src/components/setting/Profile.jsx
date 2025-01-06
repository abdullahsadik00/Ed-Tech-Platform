import React, { useEffect, useRef, useState } from 'react';
import profile from '../../assets/icons/profile.svg';

const Profile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Select Gender');

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setDropdownOpen(false); // Close the dropdown after selection
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const daysContainerRef = useRef(null);
  const datepickerContainerRef = useRef(null);
  useEffect(() => {
    if (daysContainerRef.current) {
      renderCalendar();
    }
  }, [currentDate, isCalendarOpen]);

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysContainer = daysContainerRef.current;
    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDiv = document.createElement('div');
      daysContainer.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.className =
        'flex h-[38px] w-[38px] items-center text-[#3a3939] justify-center rounded-[7px] border-[.5px] border-transparent hover:bg-[#3ac4fe] hover:text-white  mb-1 font-poppins font-semibold leading-5 tracking-wide text-base';
      dayDiv.textContent = i;
      dayDiv.addEventListener('click', () => {
        const selectedDateValue = `${month + 1}/${i}/${year}`;
        setSelectedDate(selectedDateValue);
        daysContainer
          .querySelectorAll('div')
          .forEach((d) => d.classList.remove('text-[#3ac4fe]'));
        dayDiv.classList.add('text-[#3ac4fe]');
        setIsCalendarOpen(false);
      });
      daysContainer.appendChild(dayDiv);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleApply = () => {
    if (selectedDate) {
      setIsCalendarOpen(false);
    }
  };

  const handleCancel = () => {
    setSelectedDate(null);
    setIsCalendarOpen(false);
  };

  const handleToggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      datepickerContainerRef.current &&
      !datepickerContainerRef.current.contains(event.target) &&
      event.target.id !== 'datepicker' &&
      event.target.id !== 'toggleDatepicker'
    ) {
      setIsCalendarOpen(false);
    }
  };

  return (
    <div>
      {/* Profile Header Section */}
      <div>
        <h2 className="font-poppins font-semibold leading-5 tracking-wide text-xl">
          Edit Profile
        </h2>
        <p className="font-normal text-left font-lato text-lg tracking-wide leading-7 text-[#8c8c8c]">
          Select a profile type to edit the relevant details.
        </p>
      </div>

      {/* Profile Type Selection */}
      <div className="grid grid-cols-3 gap-6 my-4">
        <div className="w-full p-8 py-10 flex flex-col items-center border border-[rgb(231,231,231)] justify-center gap-y-3 group bg-[#f1f1f1] hover:shadow-md hover:bg-white transition-all">
          <div className="w-24 h-24 bg-[#e8e8e8] p-6 box-border rounded-xl">
            <img src={profile} alt="Profile Icon" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-poppins font-medium leading-5 tracking-wide text-lg">
              Edit Main Profile
            </h2>
            <p className="font-normal font-lato text-lg tracking-wide leading-6 text-[#8c8c8c] text-center">
              Your main profile contains all your information that is used
              across all our apps
            </p>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Edit Profile
          </span>
        </div>
      </div>

      {/* Profile Image Section */}
      <div>
        <div>
          <p className="font-poppins font-medium leading-5 tracking-wide text-lg">
            Profile Image
          </p>
          <div>
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
          </div>
        </div>

        {/* Basic Details Section */}
        <div>
          <p className="font-poppins font-medium leading-5 tracking-wide text-lg my-4">
            Basic Details
          </p>
          <div className="grid grid-cols-3 gap-6 my-3">
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                First Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
              />
              <span className="font-normal text-left font-lato text-xs tracking-wider leading-7 -mt-2.5 text-[#f04343]">
                Error
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Middle Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Last Name
              </label>
              <input
                type="text"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
                placeholder="Doe"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Gender
              </label>

              {/* Dropdown Button */}

              <button
                onClick={toggleDropdown}
                className="flex justify-between text-[#313131] bg-white border  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                type="button"
              >
                {selectedGender}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="#"
                        onClick={() => handleGenderSelect('Male')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Male
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleGenderSelect('Female')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Female
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleGenderSelect('Other')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Other
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Date of Birth
              </label>
              <div className="mx-auto w-full max-w-[510px]">
                <div className="relative">
                  <input
                    id="datepicker"
                    type="text"
                    placeholder="Pick a date"
                    className="h-12 w-full appearance-none rounded-lg border border-stroke bg-white pl-12 pr-4 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-[#313131]"
                    value={selectedDate || ''}
                    readOnly
                    onClick={handleToggleCalendar}
                  />
                  <span
                    id="toggleDatepicker"
                    onClick={handleToggleCalendar}
                    className="absolute inset-y-0 flex h-12 w-12 items-center justify-center text-dark-5"
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 3.3125H16.3125V2.625C16.3125 2.25 16 1.90625 15.5937 1.90625C15.1875 1.90625 14.875 2.21875 14.875 2.625V3.28125H6.09375V2.625C6.09375 2.25 5.78125 1.90625 5.375 1.90625C4.96875 1.90625 4.65625 2.21875 4.65625 2.625V3.28125H3C1.9375 3.28125 1.03125 4.15625 1.03125 5.25V16.125C1.03125 17.1875 1.90625 18.0938 3 18.0938H18C19.0625 18.0938 19.9687 17.2187 19.9687 16.125V5.25C19.9687 4.1875 19.0625 3.3125 18 3.3125ZM3 4.71875H4.6875V5.34375C4.6875 5.71875 5 6.0625 5.40625 6.0625C5.8125 6.0625 6.125 5.75 6.125 5.34375V4.71875H14.9687V5.34375C14.9687 5.71875 15.2812 6.0625 15.6875 6.0625C16.0937 6.0625 16.4062 5.75 16.4062 5.34375V4.71875H18C18.3125 4.71875 18.5625 4.96875 18.5625 5.28125V7.34375H2.46875V5.28125C2.46875 4.9375 2.6875 4.71875 3 4.71875ZM18 16.6562H3C2.6875 16.6562 2.4375 16.4062 2.4375 16.0937V8.71875H18.5312V16.125C18.5625 16.4375 18.3125 16.6562 18 16.6562Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.5 9.59375H8.8125C8.625 9.59375 8.5 9.71875 8.5 9.90625V10.5938C8.5 10.7812 8.625 10.9062 8.8125 10.9062H9.5C9.6875 10.9062 9.8125 10.7812 9.8125 10.5938V9.90625C9.8125 9.71875 9.65625 9.59375 9.5 9.59375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.3438 9.59375H11.6562C11.4687 9.59375 11.3438 9.71875 11.3438 9.90625V10.5938C11.3438 10.7812 11.4687 10.9062 11.6562 10.9062H12.3438C12.5312 10.9062 12.6562 10.7812 12.6562 10.5938V9.90625C12.6562 9.71875 12.5312 9.59375 12.3438 9.59375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1875 9.59375H14.5C14.3125 9.59375 14.1875 9.71875 14.1875 9.90625V10.5938C14.1875 10.7812 14.3125 10.9062 14.5 10.9062H15.1875C15.375 10.9062 15.5 10.7812 15.5 10.5938V9.90625C15.5 9.71875 15.375 9.59375 15.1875 9.59375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.5 12H5.8125C5.625 12 5.5 12.125 5.5 12.3125V13C5.5 13.1875 5.625 13.3125 5.8125 13.3125H6.5C6.6875 13.3125 6.8125 13.1875 6.8125 13V12.3125C6.8125 12.125 6.65625 12 6.5 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.5 12H8.8125C8.625 12 8.5 12.125 8.5 12.3125V13C8.5 13.1875 8.625 13.3125 8.8125 13.3125H9.5C9.6875 13.3125 9.8125 13.1875 9.8125 13V12.3125C9.8125 12.125 9.65625 12 9.5 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.3438 12H11.6562C11.4687 12 11.3438 12.125 11.3438 12.3125V13C11.3438 13.1875 11.4687 13.3125 11.6562 13.3125H12.3438C12.5312 13.3125 12.6562 13.1875 12.6562 13V12.3125C12.6562 12.125 12.5312 12 12.3438 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1875 12H14.5C14.3125 12 14.1875 12.125 14.1875 12.3125V13C14.1875 13.1875 14.3125 13.3125 14.5 13.3125H15.1875C15.375 13.3125 15.5 13.1875 15.5 13V12.3125C15.5 12.125 15.375 12 15.1875 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.5 14.4062H5.8125C5.625 14.4062 5.5 14.5312 5.5 14.7187V15.4062C5.5 15.5938 5.625 15.7188 5.8125 15.7188H6.5C6.6875 15.7188 6.8125 15.5938 6.8125 15.4062V14.7187C6.8125 14.5312 6.65625 14.4062 6.5 14.4062Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.5 14.4062H8.8125C8.625 14.4062 8.5 14.5312 8.5 14.7187V15.4062C8.5 15.5938 8.625 15.7188 8.8125 15.7188H9.5C9.6875 15.7188 9.8125 15.5938 9.8125 15.4062V14.7187C9.8125 14.5312 9.65625 14.4062 9.5 14.4062Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.3438 14.4062H11.6562C11.4687 14.4062 11.3438 14.5312 11.3438 14.7187V15.4062C11.3438 15.5938 11.4687 15.7188 11.6562 15.7188H12.3438C12.5312 15.7188 12.6562 15.5938 12.6562 15.4062V14.7187C12.6562 14.5312 12.5312 14.4062 12.3438 14.4062Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>

                {isCalendarOpen && (
                  <div
                    ref={datepickerContainerRef}
                    id="datepicker-container"
                    className="flex w-full flex-col rounded-xl bg-white p-4 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <button
                        id="prevMonth"
                        className="text-left text-white text-xl leading-10 inline before:text-[#16607b] before:content-['«']"
                        // className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[7px] border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-[#313131] sm:h-[46px] sm:w-[46px] dark:border-dark-3 dark:bg-dark dark:text-[#313131]"
                        onClick={handlePrevMonth}
                      >
                        «
                        {/* <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M16.2375 21.4875C16.0125 21.4875 15.7875 21.4125 15.6375 21.225L7.16249 12.6C6.82499 12.2625 6.82499 11.7375 7.16249 11.4L15.6375 2.77498C15.975 2.43748 16.5 2.43748 16.8375 2.77498C17.175 3.11248 17.175 3.63748 16.8375 3.97498L8.96249 12L16.875 20.025C17.2125 20.3625 17.2125 20.8875 16.875 21.225C16.65 21.375 16.4625 21.4875 16.2375 21.4875Z" />
                        </svg> */}
                      </button>

                      <span
                        id="currentMonth"
                        className="font-normal text-left font-lato text-base tracking-wide leading-7 text-[#16607b]"
                      >
                        {currentDate.toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>

                      <button
                        id="nextMonth"
                        className="text-left text-white text-xl leading-10 inline before:text-[#16607b] before:content-['»']"
                        onClick={handleNextMonth}
                      >
                        »
                        {/* <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M7.7625 21.4875C7.5375 21.4875 7.35 21.4125 7.1625 21.2625C6.825 20.925 6.825 20.4 7.1625 20.0625L15.0375 12L7.1625 3.97498C6.825 3.63748 6.825 3.11248 7.1625 2.77498C7.5 2.43748 8.025 2.43748 8.3625 2.77498L16.8375 11.4C17.175 11.7375 17.175 12.2625 16.8375 12.6L8.3625 21.225C8.2125 21.375 7.9875 21.4875 7.7625 21.4875Z" />
                        </svg> */}
                      </button>
                    </div>
                    <div className="grid grid-cols-7 justify-between text-center py-2  text-sm font-medium capitalize text-body-color sm:text-lg ">
                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Mo
                      </span>
                      {/* <span className="flex h-[38px] w-[38px] items-center justify-center sm:h-[46px] sm:w-[47px]">
                        Mo
                      </span> */}

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Tu
                      </span>

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        We
                      </span>

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Th
                      </span>

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Fr
                      </span>

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Sa
                      </span>

                      <span className="font-poppins font-semibold leading-5 tracking-wide text-base">
                        Su
                      </span>
                    </div>

                    <div
                      ref={daysContainerRef}
                      id="days-container"
                      className="grid grid-cols-7 text-center text-sm font-medium sm:text-lg"
                    >
                      {/* Days will be rendered here */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Contact Details Section */}
        <div>
          <p className="font-poppins font-medium leading-5 tracking-wide text-lg my-4">
            Contact Details
          </p>
          <div className="grid grid-cols-3 gap-y-3 my-3">
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Phone Number
              </label>
              <input
                type="text"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Mobile
              </label>
              <input
                type="text"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-left font-lato text-xs tracking-wider leading-7 text-[#8c8c8c]">
                Email
              </label>
              <input
                type="email"
                className="p-2.5 border border-[#e7e7e7] rounded-sm outline-none text-[#4d5256]"
                placeholder="John Doe"
              />
            </div>
          </div>
        </div>
        {/* Social Media Profiles
         */}
        <div>
          <p className="font-poppins font-medium leading-5 tracking-wide text-lg my-4">
            Social Media Profiles
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;