import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
import {
  Book,
  FileText,
  Upload,
  Library,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
const LearningPath = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const contentTypes = [
    {
      id: 'stage',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Stage',
      description: 'Create learning stages for structured progress',
    },
    {
      id: 'course',
      icon: <Book className="h-6 w-6" />,
      title: 'Course',
      description: 'Create and publish educational content',
    },
    {
      id: 'page',
      icon: <FileText className="h-6 w-6" />,
      title: 'Page',
      description: 'Create standalone pages containing educational content',
    },
    {
      id: 'quiz',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Quiz',
      description: 'Create assessments to evaluate learners',
    },
    {
      id: 'upload',
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload',
      description: 'Upload your educational materials',
    },
    {
      id: 'library',
      icon: <Library className="h-6 w-6" />,
      title: 'Library',
      description: 'Access your content library',
    },
  ];
  const handleContentSelect = (content) => {
    if (!selectedContent.find((item) => item.id === content.id)) {
      setSelectedContent([...selectedContent, content]);
    }
  };
  const handleRemoveContent = (contentId) => {
    setSelectedContent(selectedContent.filter((item) => item.id !== contentId));
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          General Knowledge & Methodology - Layout & Spacing
        </h1>
        <p className="text-gray-600">
          Combining good layout design and spacing design in Figma will result
          in a more professional, structured, and aesthetic design, ensuring a
          better user experience when using a product or website.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Prototyping</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">
              Not Urgent
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Estimated 1 Week</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">English</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {contentTypes.map((content) => (
          <button
            key={content.id}
            onClick={() => handleContentSelect(content)}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="mb-2 text-primary">{content.icon}</div>
            <span className="text-sm font-medium">{content.title}</span>
          </button>
        ))}
      </div>
      <div open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="sm:max-w-[600px]">
          <div>
            <h2>Select from Library</h2>
          </div>
          <div className="space-y-4">
            <input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                {selectedContent.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center gap-2 bg-gray-100 p-2 rounded"
                  >
                    {content.icon}
                    <span>{content.title}</span>
                    <button
                      onClick={() => handleRemoveContent(content.id)}
                      className="ml-auto text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearningPath;

// import React, { useEffect, useRef, useState } from 'react';
// import course from '../assets/icons/online-learning.png';
// import close from '../assets/icons/close.png';
// import bg from '../assets/img/bg.png';
// import useTagInput from '../components/core/customHook/useTagInput';
// import TagField from '../components/uiElements/TagField';

// const Courses = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false); // First Modal state
//   const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false); // Second Modal state

//   // Open the first dialog
//   const openDialog = () => setIsDialogOpen(true);

//   // Close the first dialog
//   const closeDialog = () => setIsDialogOpen(false);

//   // Open the second dialog (triggered by "Next" button)
//   const openSecondDialog = () => {
//     setIsDialogOpen(false); // Close the first modal
//     setIsSecondDialogOpen(true); // Open the second modal
//   };

//   // Close the second dialog
//   const closeSecondDialog = () => setIsSecondDialogOpen(false);

//   // Prevent closing when clicking inside the modal
//   const handleModalClick = (e) => {
//     e.stopPropagation(); // Prevents closing when clicking inside the modal
//   };
//   const [activeTab, setActiveTab] = useState('tab1');

//   const showTab = (tabId) => {
//     setActiveTab(tabId);
//   };
//   const [mobileTab, setMobileTab] = useState('tab');
//   const [learningModules, setLearningModules] = useState(1);
//   const [description, setDescription] = useState('');
//   const handleInputChange = (event) => {};
//   const characterLimit = 100;
//   // const [tags, setTags] = useState([
//   //   'React',
//   //   'JavaScript',
//   //   'CSS',
//   //   'Node.js',
//   //   'Tailwind1',
//   //   'Tailwind2',
//   //   'Tailwind3',
//   // ]);
//   const [inputValue, setInputValue] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef(null);
//   const inputRef = useRef(null);
//   const [isOnCLick, setIsOnCLick] = useState(false);

//   // Close modal if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target) &&
//         !inputRef.current.contains(event.target)
//       ) {
//         setIsModalOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
//   // const handleTagClick = (tag) => {
//   //   console.log('tags', tag);
//   //   setInputValue((prevTags) => {
//   //     console.log('prevTags', prevTags);
//   //     if (prevTags.includes(tag)) {
//   //       // Remove the tag from the array
//   //       return prevTags.filter((t) => t !== tag);
//   //     } else {
//   //       // Add the tag to the array
//   //       return [...prevTags, tag];
//   //     }
//   //   });
//   // };

//   // const handleCreateTag = (tag) => {
//   //   if (tag && !tags.includes(tag)) {
//   //     // Check if tag is non-empty and unique
//   //     setTags((prevTags) => [...prevTags, tag]); // Add new tag to state
//   //     console.log('New tag created:', tag);
//   //   } else {
//   //     console.error('Tag already exists or is empty.');
//   //   }
//   // };
//   const MAX_TAGS = 5;

//   const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags
//   const handleSubmit = () => {
//     // Send tags to the backend
//     console.log(tags);
//   };

//   const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
//   const [unit, setUnit] = useState('Week'); // Could be 'Day', 'Week', or 'Month'
//   const [quantity, setQuantity] = useState(2); // Initial value for quantity
//   return (
//     <div>
//       {/* Button to open the first dialog */}
//       <button
//         onClick={openDialog}
//         className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-richblack-400 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
//         type="button"
//       >
//         Add new content
//       </button>
//       coment
//       {/* {isSecondDialogOpen && ( */}
//       <div
//         className=" flex items-center justify-center bg-[#e3e3e3] h-full w-full"
//         onClick={closeSecondDialog} // Close the modal when clicked outside
//       >
//         {/* Fullscreen modal content */}
//         <div
//           className=" w-full h-full flex flex-col  items-center py-4 overflow-y-auto"
//           onClick={handleModalClick} // Prevent closing when clicking inside
//         >
//           <div className="flex justify-between w-full">
//             <div
//               className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
//                 learningModules >= 1 ? 'border-[#648ffa]' : 'border-[#a5aab5]'
//               }
// `}
//             >
//               Step 1 - Create Learning Path
//             </div>
//             <div
//               className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
//                 learningModules >= 2 ? 'border-[#64fabb]' : 'border-[#a5aab5]'
//               }
// `}
//             >
//               Step 2 - Learning Path Overview
//             </div>
//             <div
//               className={` border-b-2 pb-2 text-center col-span-1 w-1/3  ${
//                 learningModules >= 2 ? 'border-[#64fabb]' : 'border-[#a5aab5]'
//               }
// `}
//             >
//               <div>Step 3 - Add Content</div>
//             </div>
//           </div>
//           <div className="text-xl font-semibold text-slate-800 mb-8 ">
//             Second Modal Content
//             <div className="">
//               <img
//                 src={close}
//                 alt="Close"
//                 className="w-6 h-6 cursor-pointer"
//                 onClick={closeSecondDialog} // Close the second modal when clicked
//               />
//             </div>
//           </div>
//           {/* {learningModules === 1 && ( */}
//           <div className="flex w-full max-w-2xl flex-col bg-white rounded-t-3xl pb-3">
//             <div className="h-[150px] w-full max-w-2xl bg-richblack-700 rounded-t-3xl relative">
//               <img
//                 src={bg}
//                 alt=""
//                 className="h-full w-full max-w-2xl  rounded-t-3xl relative"
//               />
//               <p className="m-0 absolute -bottom-4 bg-[#e7e7e7] w-7 h-7 left-7 p-4  "></p>
//               <p className="m-1 absolute bottom-6 right-5 bg-white px-1 py-1.5 text-sm rounded-sm">
//                 Update Thumbnail
//               </p>
//             </div>
//             <div className="mt-6 px-6">
//               <h2 className="font-poppins font-semibold leading-9 tracking-wide text-3xl my-4">
//                 General Knowledge & Methodology Layout and Spacing
//               </h2>
//             </div>
//             <div className="flex flex-col space-y-4 px-6">
//               <div className="grid grid-cols-5 w-full border">
//                 <div className="col-span-2 flex space-x-2 border-2 border-yellow-25">
//                   <div className="w-6 h-6">
//                     <img src={close} alt="" />
//                   </div>
//                   <p>Category</p>
//                 </div>
//                 <div className="grid-cols-3 relative">
//                   <p>2 Weeks</p>
//                   <div className=" w-[150px] h-[100px] border top-0 left-0 flex flex-col bg-white">
//                     <p>Estimated time</p>
//                     <div className="flex">
//                       <div>
//                         <input
//                           type="number"
//                           id="quantity"
//                           name="quantity"
//                           min="1"
//                           max="30"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <button>top</button>
//                         <p>Week</p>
//                         <button>bottom</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`grid grid-cols-5 w-full  ${
//                   inputValue.length > 5 ? 'h-[70px]' : ''
//                 }`}
//               >
//                 <div className="col-span-2 flex space-x-2 ">
//                   <div className="w-6 h-6">
//                     <img src={close} alt="" />
//                   </div>
//                   <p>Estimate Duration</p>
//                 </div>
//                 <div className="relative col-span-3">
//                   {/* new one start */}
//                   <div>
//                     <TagField
//                       tags={tags}
//                       addTag={handleAddTag}
//                       removeTag={handleRemoveTag}
//                       maxTags={MAX_TAGS}
//                     />

//                     <div className="border-t pt-2 flex justify-end">
//                       <button
//                         data-dialog-close="true"
//                         onClick={handleSubmit} // Open second modal
//                         className="rounded-md bg-green-600 py-2 px-4 border border-[#e2e2e2] font-bold text-center text-sm text-richblack-700 transition-all shadow-sm hover:shadow-lg active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
//                         type="button"
//                       >
//                         Ok
//                       </button>
//                     </div>
//                   </div>
//                   {/* new one ends */}
//                   {/* Input Field */}
//                 </div>
//               </div>
//               <div className="grid grid-cols-5 w-full border">
//                 <div className="col-span-2 flex space-x-2 border-2 border-yellow-25">
//                   <div className="w-6 h-6">
//                     <img src={close} alt="" />
//                   </div>
//                   <p>Trainer</p>
//                 </div>
//                 <input
//                   type="text"
//                   className="col-span-3 border-2 border-yellow-500"
//                 />
//               </div>
//               <div className="flex flex-col items-start">
//                 <label htmlFor="description" className="mb-2 text-lg">
//                   Description (max 300 characters)
//                 </label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={handleInputChange}
//                   maxLength={characterLimit}
//                   placeholder="Enter your description here..."
//                   className="border p-2 w-full h-32 resize-none"
//                 />
//                 <div className="text-right text-sm text-gray-500">
//                   {description.length}/{characterLimit} characters
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* )} */}
//         </div>
//       </div>
//       {/* )} */}
//       coment
//       {/* Tab Buttons */}
//       <div className="w-full mt-6 mx-auto">
//         <div className="bg-white p-2 rounded-t-lg">
//           <div className="flex flex-wrap space-x-4 text-base font-normal uppercase text-richblack-400">
//             {[
//               'All',
//               'Content',
//               'Page',
//               'Quiz',
//               'Assignment',
//               'Learning Path',
//               'Wiki',
//             ].map((tab, index) => {
//               const tabId = `tab${index + 1}`;
//               return (
//                 <button
//                   key={tab}
//                   className={`px-4 py-2 text-[#606060] font-semibold border-b-4 hover:text-[#909090] focus:outline-none ${
//                     activeTab === tabId
//                       ? 'border-[#909090]'
//                       : 'border-transparent'
//                   }`}
//                   onClick={() => showTab(tabId)}
//                 >
//                   {tab}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div
//           id="tab1"
//           className={`p-4 tab-content bg-white shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
//             activeTab === 'tab1' ? '' : 'hidden'
//           }`}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div
//               key={index}
//               className="col-span-1 flex flex-col space-y-3 space-x-2 rounded-md border-[#e1e1e1] border p-2"
//             >
//               <div className="h-[100px] bg-[#f7de39] rounded-md">
//                 <img
//                   src="https://picsum.photos/1920/1080"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="font-poppins font-semibold leading-5 tracking-wide">
//                 Mastering UI/UX design for impactful solutions
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 <a
//                   href="tags/internal-communication"
//                   className="px-2 py-1 bg-richblack-300/10 rounded-lg hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]"
//                 >
//                   Internal Communication
//                 </a>
//               </div>
//               <div className="flex justify-between">
//                 <p className="font-normal text-left font-lato text-xs tracking-wide leading-3 text-[#8c8c8c]">
//                   Edited 2h ago
//                 </p>
//                 <button>...</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* First Dialog Backdrop */}
//       {isDialogOpen && (
//         <div
//           data-dialog-backdrop="dialog"
//           data-dialog-backdrop-close="false"
//           className="pointer-events-auto fixed inset-0 z-[999] grid h-full w-full place-items-center bg-[#f8f8f8] bg-opacity-80 opacity-100 backdrop-blur-sm transition-opacity duration-300 min-h-screen"
//         >
//           {/* First Dialog */}
//           <div
//             data-dialog="dialog"
//             className="relative m-4 p-4 w-11/12 sm:w-2/5 md:w-1/2 min-w-[40%] max-w-[80%] rounded-lg bg-white border-[#f2f2f2] border shadow-md"
//             onClick={handleModalClick} // Prevent closing when clicking inside the modal
//           >
//             {/* Dialog Header */}
//             <div className="flex shrink-0 items-center justify-between text-xl font-medium text-slate-800">
//               <h2>Create new content</h2>
//               <div className="w-5 ">
//                 <img
//                   src={close}
//                   alt="Close"
//                   onClick={closeDialog}
//                   className="cursor-pointer "
//                 />
//               </div>
//             </div>
//             <hr className="my-4" />

//             {/* Dialog Body */}
//             <div className="grid grid-cols-2 gap-x-4 gap-y-4">
//               <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 px-4 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#339AF0] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert" // Ensure both width and height are set to 100% of the parent
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Content
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create and publish educational content for the learner
//                 </p>
//               </div>
//               <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#a4f033] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert"
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Page
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create a standalone page containing educational information.
//                 </p>
//               </div>
//               <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#ed33f0] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert"
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Quiz
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create assessments that evaluate learners' understanding of
//                   the material.
//                 </p>
//               </div>
//               <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#f09533] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert"
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Assignment
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create assignments for learners to complete within a certain
//                   deadline.
//                 </p>
//               </div>
//               <div className="col-span-1 border border-[#a1a1a1] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#f0335c] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert"
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Learning Path
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create a structured and sequential journey for learners to
//                   follow.
//                 </p>
//               </div>
//               <div className="col-span-1 border border-[#faeded] shadow-md rounded-md p-2 flex flex-col justify-between hover:border-2 transition-all hover:scale-105 hover:bg-[#f9f9f1]">
//                 <div className="flex space-x-2 items-center">
//                   <div className="bg-[#339AF0] p-[2px] rounded-sm w-6">
//                     <img
//                       src={course}
//                       alt="Course Icon"
//                       className="w-full h-full object-contain invert"
//                     />
//                   </div>
//                   <div className="font-poppins tracking-wide font-semibold text-[#141619]">
//                     Content
//                   </div>
//                 </div>
//                 <p className="font-lato text-[#424955] leading-5 mt-2">
//                   Create and publish educational content for the learner.
//                 </p>
//               </div>
//             </div>

//             {/* Dialog Footer */}
//             <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
//               {/* Cancel Button */}
//               <button
//                 data-dialog-close="true"
//                 onClick={closeDialog}
//                 className="rounded-md border py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-richblack-5 focus:bg-slate-100 border-[#e2e2e2] hover:border-1 font-bold"
//                 type="button"
//               >
//                 Cancel
//               </button>

//               {/* Next Button */}
//               <button
//                 data-dialog-close="true"
//                 onClick={openSecondDialog} // Open second modal
//                 className="rounded-md bg-green-600 py-2 px-4 border border-[#e2e2e2] font-bold text-center text-sm text-richblack-700 transition-all shadow-sm hover:shadow-lg active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
//                 type="button"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Second Modal (covers the entire screen) */}
//     </div>
//   );
// };

// export default Courses;
