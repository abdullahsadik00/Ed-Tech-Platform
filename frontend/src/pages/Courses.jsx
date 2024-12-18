import React, { useEffect, useRef, useState } from 'react';
import course from '../assets/icons/online-learning.png';
import close from '../assets/icons/close.png';

const Courses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // First Modal state
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false); // Second Modal state

  // Open the first dialog
  const openDialog = () => setIsDialogOpen(true);

  // Close the first dialog
  const closeDialog = () => setIsDialogOpen(false);

  // Open the second dialog (triggered by "Next" button)
  const openSecondDialog = () => {
    setIsDialogOpen(false); // Close the first modal
    setIsSecondDialogOpen(true); // Open the second modal
  };

  // Close the second dialog
  const closeSecondDialog = () => setIsSecondDialogOpen(false);

  // Prevent closing when clicking inside the modal
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevents closing when clicking inside the modal
  };
  const [activeTab, setActiveTab] = useState('tab1');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };
  const [mobileTab, setMobileTab] = useState('tab');
  const [learningModules, setLearningModules] = useState(1);
  const [description, setDescription] = useState('');
  const handleInputChange = (event) => {};
  const characterLimit = 100;
  const [tags, setTags] = useState([
    'React',
    'JavaScript',
    'CSS',
    'Node.js',
    'Tailwind1',
    'Tailwind2',
    'Tailwind3',
  ]);
  const [inputValue, setInputValue] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const [isOnCLick, setIsOnCLick] = useState(false);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleTagClick = (tag) => {
    console.log('tags', tag);
    setInputValue((prevTags) => {
      console.log('prevTags', prevTags);
      if (prevTags.includes(tag)) {
        // Remove the tag from the array
        return prevTags.filter((t) => t !== tag);
      } else {
        // Add the tag to the array
        return [...prevTags, tag];
      }
    });
  };

  const handleCreateTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      // Check if tag is non-empty and unique
      setTags((prevTags) => [...prevTags, tag]); // Add new tag to state
      console.log('New tag created:', tag);
    } else {
      console.error('Tag already exists or is empty.');
    }
  };
  return (
    <div>
      {/* Button to open the first dialog */}
      <button
        onClick={openDialog}
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-richblack-400 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Add new content
      </button>
      coment
      {/* {isSecondDialogOpen && ( */}
      <div
        className=" flex items-center justify-center bg-white h-full w-full"
        onClick={closeSecondDialog} // Close the modal when clicked outside
      >
        {/* Fullscreen modal content */}
        <div
          className=" w-full h-full flex flex-col  items-center py-4 overflow-y-auto"
          onClick={handleModalClick} // Prevent closing when clicking inside
        >
          <div className="flex justify-between w-full">
            <div
              className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
                learningModules >= 1 ? 'border-[#648ffa]' : 'border-[#a5aab5]'
              } 
`}
            >
              Step 1 - Create Learning Path
            </div>
            <div
              className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
                learningModules >= 2 ? 'border-[#64fabb]' : 'border-[#a5aab5]'
              } 
`}
            >
              Step 2 - Learning Path Overview
            </div>
            <div
              className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
                learningModules >= 2 ? 'border-[#64fabb]' : 'border-[#a5aab5]'
              } 
`}
            >
              <div>Step 3 - Add Content</div>
            </div>
          </div>
          <div className="text-xl font-semibold text-slate-800 mb-8 ">
            Second Modal Content
            <div className="">
              <img
                src={close}
                alt="Close"
                className="w-6 h-6 cursor-pointer"
                onClick={closeSecondDialog} // Close the second modal when clicked
              />
            </div>
          </div>
          {/* {learningModules === 1 && ( */}
          <div className="flex w-full max-w-2xl flex-col">
            <div className="h-[150px] w-full max-w-2xl bg-richblack-700 rounded-t-3xl relative">
              <p className="m-0 absolute -bottom-4 bg-[#e7e7e7] w-7 h-7 left-7 p-4  "></p>
              <p className="m-1 absolute bottom-6 right-5 bg-white px-1 py-1.5 text-sm rounded-sm">
                Update Thumbnail
              </p>
            </div>
            <div className="mt-6">
              <h2 className="font-poppins font-semibold leading-9 tracking-wide text-3xl my-4">
                General Knowledge & Methodology Layout and Spacing
              </h2>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-5 w-full border">
                <div className="col-span-2 flex space-x-2 border-2 border-yellow-25">
                  <div className="w-6 h-6">
                    <img src={close} alt="" />
                  </div>
                  <p>Category</p>
                </div>
                <input
                  type="text"
                  className="col-span-3 border-2 border-yellow-500 relative"
                  onClick={() => {
                    console.log('Click');
                  }}
                />
                <div></div>
              </div>

              <div
                className={`grid grid-cols-5 w-full border ${
                  inputValue.length > 5 ? 'h-[70px]' : ''
                }`}
              >
                <div className="col-span-2 flex space-x-2 border-2 border-yellow-25">
                  <div className="w-6 h-6">
                    <img src={close} alt="" />
                  </div>
                  <p>Estimate Duration</p>
                </div>
                <div className="relative col-span-3">
                  {/* Input Field */}
                  <input
                    ref={inputRef}
                    type="text"
                    // value={inputValue}
                    onClick={() => setIsModalOpen(true)}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full p-2  focus:outline-none absolute top-0 left-0"
                    placeholder={inputValue.length > 0 ? '' : 'Empty'}
                    onKeyDown={(e) => {
                      if (e.key === ',' || e.key === 'Enter') {
                        e.preventDefault(); // Prevent form submission
                        const newTag = e.target.value.trim();
                        handleCreateTag(newTag); // Call function to create tag
                        e.target.value = ''; // Clear input
                      }
                    }}
                  />
                  <div
                    ref={inputRef}
                    className="space-x-2 flex flex-wrap absolute top-0 left-0"
                    onClick={() => setIsModalOpen(true)}
                    onChange={(e) => setInputValue(e.target.value)}
                  >
                    {inputValue.map((tag) => (
                      <span
                        key={tag}
                        // onClick={() => handleTagClick(tag)}
                        className="px-2 py-1 bg-richblack-300/10 rounded-lg m-1 hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]
                               cursor-pointer  "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Modal */}
                  {isModalOpen && (
                    <div
                      ref={modalRef}
                      className="absolute top-0 mt-2 w-full bg-white border rounded-md shadow-lg z-10"
                    >
                      <div className="p-4 space-x-2 flex-col flex flex-wrap">
                        <div
                          className="border-b border-[#9b9b9b]"
                          onClick={() => setIsOnCLick(true)}
                        >
                          {/* <p>{inputValue}</p> */}
                          <div className="space-x-2 flex flex-wrap">
                            {inputValue.map((tag) => (
                              <span
                                key={tag}
                                // onClick={() => handleTagClick(tag)}
                                className="px-2 py-1 bg-richblack-300/10 rounded-lg m-2 hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]
                               cursor-pointer  "
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {isOnCLick && (
                            <div>
                              <input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => handleCreateTag(e)}
                                className="outline-none"
                              />
                            </div>
                          )}
                        </div>
                        <p
                          className="ml-0 rounded-lg m-2  tracking-wider font-medium text-sm text-left font-lato text-[#616161]
                               "
                        >
                          Select category or create one
                        </p>
                        <div className="space-x-2 flex flex-wrap">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              onClick={() => handleTagClick(tag)}
                              className="px-2 py-1 bg-richblack-300/10 rounded-lg m-2 hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]
                               cursor-pointer  "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="border-t pt-2 flex justify-end">
                          <button
                            data-dialog-close="true"
                            onClick={() => setIsModalOpen(false)} // Open second modal
                            className="rounded-md bg-green-600 py-2 px-4 border border-[#e2e2e2] font-bold text-center text-sm text-richblack-700 transition-all shadow-sm hover:shadow-lg active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                            type="button"
                          >
                            Ok
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-5 w-full border">
                <div className="col-span-2 flex space-x-2 border-2 border-yellow-25">
                  <div className="w-6 h-6">
                    <img src={close} alt="" />
                  </div>
                  <p>Trainer</p>
                </div>
                <input
                  type="text"
                  className="col-span-3 border-2 border-yellow-500"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="description" className="mb-2 text-lg">
                  Description (max 300 characters)
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleInputChange}
                  maxLength={characterLimit}
                  placeholder="Enter your description here..."
                  className="border p-2 w-full h-32 resize-none"
                />
                <div className="text-right text-sm text-gray-500">
                  {description.length}/{characterLimit} characters
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
      {/* )} */}
      coment
      {/* Tab Buttons */}
      <div className="w-full mt-6 mx-auto">
        <div className="bg-white p-2 rounded-t-lg">
          <div className="flex flex-wrap space-x-4 text-base font-normal uppercase text-richblack-400">
            {[
              'All',
              'Content',
              'Page',
              'Quiz',
              'Assignment',
              'Learning Path',
              'Wiki',
            ].map((tab, index) => {
              const tabId = `tab${index + 1}`;
              return (
                <button
                  key={tab}
                  className={`px-4 py-2 text-[#606060] font-semibold border-b-4 hover:text-[#909090] focus:outline-none ${
                    activeTab === tabId
                      ? 'border-[#909090]'
                      : 'border-transparent'
                  }`}
                  onClick={() => showTab(tabId)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div
          id="tab1"
          className={`p-4 tab-content bg-white shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
            activeTab === 'tab1' ? '' : 'hidden'
          }`}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col space-y-3 space-x-2 rounded-md border-[#e1e1e1] border p-2"
            >
              <div className="h-[100px] bg-[#f7de39] rounded-md">
                <img
                  src="https://picsum.photos/1920/1080"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-poppins font-semibold leading-5 tracking-wide">
                Mastering UI/UX design for impactful solutions
              </h2>
              <div className="flex flex-wrap gap-2">
                <a
                  href="tags/internal-communication"
                  className="px-2 py-1 bg-richblack-300/10 rounded-lg hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]"
                >
                  Internal Communication
                </a>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-left font-lato text-xs tracking-wide leading-3 text-[#8c8c8c]">
                  Edited 2h ago
                </p>
                <button>...</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* First Dialog Backdrop */}
      {isDialogOpen && (
        <div
          data-dialog-backdrop="dialog"
          data-dialog-backdrop-close="false"
          className="pointer-events-auto fixed inset-0 z-[999] grid h-full w-full place-items-center bg-[#f8f8f8] bg-opacity-80 opacity-100 backdrop-blur-sm transition-opacity duration-300 min-h-screen"
        >
          {/* First Dialog */}
          <div
            data-dialog="dialog"
            className="relative m-4 p-4 w-11/12 sm:w-2/5 md:w-1/2 min-w-[40%] max-w-[80%] rounded-lg bg-white border-[#f2f2f2] border shadow-md"
            onClick={handleModalClick} // Prevent closing when clicking inside the modal
          >
            {/* Dialog Header */}
            <div className="flex shrink-0 items-center justify-between text-xl font-medium text-slate-800">
              <h2>Create new content</h2>
              <div className="w-5 ">
                <img
                  src={close}
                  alt="Close"
                  onClick={closeDialog}
                  className="cursor-pointer "
                />
              </div>
            </div>
            <hr className="my-4" />

            {/* Dialog Body */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 px-4 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#339AF0] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert" // Ensure both width and height are set to 100% of the parent
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Content
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create and publish educational content for the learner
                </p>
              </div>
              <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#a4f033] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Page
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create a standalone page containing educational information.
                </p>
              </div>
              <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#ed33f0] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Quiz
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create assessments that evaluate learners' understanding of
                  the material.
                </p>
              </div>
              <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#f09533] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Assignment
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create assignments for learners to complete within a certain
                  deadline.
                </p>
              </div>
              <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#f0335c] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Learning Path
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create a structured and sequential journey for learners to
                  follow.
                </p>
              </div>
              <div className="col-span-1 border border-[#faeded] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
                <div className="flex space-x-2 items-center">
                  <div className="bg-[#339AF0] p-[2px] rounded-sm w-6">
                    <img
                      src={course}
                      alt="Course Icon"
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                  <div className="font-poppins tracking-wide font-semibold text-[#141619]">
                    Content
                  </div>
                </div>
                <p className="font-lato text-[#424955] leading-5 mt-2">
                  Create and publish educational content for the learner.
                </p>
              </div>
            </div>

            {/* Dialog Footer */}
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              {/* Cancel Button */}
              <button
                data-dialog-close="true"
                onClick={closeDialog}
                className="rounded-md border py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-richblack-5 focus:bg-slate-100 border-[#e2e2e2] hover:border-1 font-bold"
                type="button"
              >
                Cancel
              </button>

              {/* Next Button */}
              <button
                data-dialog-close="true"
                onClick={openSecondDialog} // Open second modal
                className="rounded-md bg-green-600 py-2 px-4 border border-[#e2e2e2] font-bold text-center text-sm text-richblack-700 transition-all shadow-sm hover:shadow-lg active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Second Modal (covers the entire screen) */}
    </div>
  );
};

export default Courses;
