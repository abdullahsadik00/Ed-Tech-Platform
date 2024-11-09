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
    <div className="bg-[#f8f8fe] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 sm:space-x-0 p-4">
      {/* Left Column: Cards 1, 2, and 3 */}
      <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-2 lg:mr-4 mr-0">
        {/* Card 1 */}
        <div className="border rounded-lg bg-richblack-400 w-full h-28 flex items-center justify-center">
          <span>Your students are doing great</span>
          <span className="font-bold ml-2">60%</span>
        </div>

        {/* Card 2 */}
        <div className="border border-white rounded-lg w-full h-[350px] flex shadow-sm bg-white">
          <div className="w-full px-4 py-2">
            <div className="flex justify-between items-center ">
              <h2 className=" font-poppins font-semibold leading-5 tracking-wider">
                Submitted Test
              </h2>
              <div>
                <DropdownMenu buttonLabel="Options" items={menuItems} />
              </div>
            </div>
            {/* Table */}
            <section className="antialiased  text-richblack-600 mt-2">
              <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-[white]  rounded-lg border border-[#e4e4ea] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full rounded-lg">
                      <thead className="text-xs font-semibold uppercase text-richblack-400 bg-[#f9f9f1]">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Date of Submission
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Status
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Action
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-[#e4e4ea]">
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                  width="40"
                                  height="40"
                                  alt="Alex Shatov"
                                />
                              </div>
                              <div className="font-medium text-richblack-800">
                                Alex Shatov
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">December 17, 2024</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              <div class="rounded-full font-bold bg-[#ececfc] py-0.5 px-2 text-center border border-transparent text-sm text-[#8682ea] transition-all shadow-sm">
                                Active
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">🇺🇸</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                  width="40"
                                  height="40"
                                  alt="Philip Harbach"
                                />
                              </div>
                              <div className="font-medium text-richblack-800">
                                Philip Harbach
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">December 17, 2024</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div class="rounded-full font-bold bg-[#ececfc] py-0.5 px-2 text-center border border-transparent text-sm text-[#8682ea] transition-all shadow-sm">
                              Active
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">🇩🇪</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                  width="40"
                                  height="40"
                                  alt="Philip Harbach"
                                />
                              </div>
                              <div className="font-medium text-richblack-800">
                                Philip Harbach
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">December 17, 2024</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div class="rounded-full bg-[#f6e4d0] py-0.5 px-2 border border-transparent text-sm text-center text-[#f5b070] font-bold transition-all shadow-sm">
                              Opened
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">🇩🇪</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                  width="40"
                                  height="40"
                                  alt="Mirko Fisuk"
                                />
                              </div>
                              <div className="font-medium text-richblack-800">
                                Mirko Fisuk
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">December 17, 2024</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div class="rounded-full bg-[#ffc8c3] py-0.5 px-2 border border-transparent text-sm text-[#f59582] font-bold text-center transition-all shadow-sm">
                              Completed
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">🇫🇷</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-end px-4 mt-1">
                  <p className="font-semibold text-sm text-[#bdbcbc] hover:text-[#8E8E93] cursor-pointer">
                    View more
                  </p>
                </div>
              </div>
            </section>
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
      <div className="border rounded-lg leading-3  bg-richblack-400 h-full w-full flex font-bold items-center justify-center sm:col-span-1 sm:mt-0 mt-4">
        <div>Card 2</div>
      </div>
    </div>
  );
};

export default HomeContent;
