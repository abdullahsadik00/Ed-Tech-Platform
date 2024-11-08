import React from 'react';
import DropdownMenu from '../../ui elements/DropdownMenu';

const HomeContent = () => {
  const menuItems = [
    { label: 'Account settings', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'License', href: '#' },
    { label: 'Sign out', onClick: () => alert('Signing out...') },
  ];
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 sm:space-x-0  p-4">
      {/* Left Column: Cards 1, 2, and 3 */}
      <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-2 lg:mr-4 mr-0">
        {/* Card 1 */}
        <div className="border rounded-lg bg-richblack-400 w-full h-28 flex items-center justify-center">
          <span>Your students are doing great</span>
          <span className="font-bold ml-2">60%</span>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg w-full h-72 flex ">
          <div className="w-full">
            <div className="flex justify-between items-center p-4">
              <h2>Submitted Test</h2>
              <div className="">
                <DropdownMenu buttonLabel="Options" items={menuItems} />
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cards 3 and 4 in a row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 border rounded-lg bg-richblack-200 h-28 flex items-center justify-center">
            <div>Top Students</div>
          </div>
          <div className="col-span-2 border rounded-lg bg-richblack-100 h-28 flex items-center justify-center">
            <div>Groups</div>
          </div>
        </div>
      </div>

      {/* Right Column: Card 2 */}
      <div className="border rounded-lg bg-richblack-400 h-full w-full flex items-center justify-center sm:col-span-1 sm:mt-0 mt-4">
        <div>Card 2</div>
      </div>
    </div>
  );
};

export default HomeContent;
