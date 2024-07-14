import React from 'react';

function Table({ data }) {
  const today = new Date().toLocaleDateString();

  const handleSegregate = (id) => {
    // Implement your logic for user action on clicking Segregate button
    console.log(`Segregate button clicked for user ID: ${id}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center mb-4">
        <span className="text-xl font-semibold">    Waste Segregation Report(as of: {today})</span>
      </div>
      <table className="table-auto w-full custom-table-color">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Name</th>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">House Number</th>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Address</th>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Phone Number</th>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Email</th>
            <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id} className="border border-gray-200">
              <td className="px-4 py-2">{person.name}</td>
              <td className="px-4 py-2">{person.houseNumber}</td>
              <td className="px-4 py-2">{person.address}</td>
              <td className="px-4 py-2">{person.phoneNumber}</td>
              <td className="px-4 py-2">{person.email}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button onClick={() => handleSegregate(person.id)} className="px-3 py-1 text-sm rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                  Segregated
                </button>
                <button className="px-3 py-1 text-sm rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none">
                  Not Segregated
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="6" className="px-4 py-2 text-right text-gray-500">
              Date: {today}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
