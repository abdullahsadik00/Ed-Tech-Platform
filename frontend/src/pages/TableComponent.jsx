import React, { useState } from 'react';

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  // Sample data for demonstration purposes
  const data = [
    {
      name: 'John Doe',
      profession: 'Teacher',
      subject: 'Math',
      email: 'john@example.com',
      phone: '123-456-7890',
      birthday: '1990-01-01',
    },
    {
      name: 'Jane Smith',
      profession: 'Teacher',
      subject: 'Science',
      email: 'jane@example.com',
      phone: '987-654-3210',
      birthday: '1985-05-15',
    },
    // Add more sample data as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2 w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-4">
          <select
            className="border rounded-md p-2"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">Dropdown 1</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <select
            className="border rounded-md p-2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Dropdown 2</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Profession</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.profession}</td>
              <td className="py-2 px-4 border-b">{item.subject}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.phone}</td>
              <td className="py-2 px-4 border-b">{item.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
