import React from "react";

const DataTable = ({ formData }) => {
  return (
    <div className="overflow-x-auto w-full mt-8">
      <table className="table-auto w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              First Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Last Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Gender
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Language
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Email
            </th>
          </tr>
        </thead>
        {JSON.stringify(formData)}
        <tbody>
          {formData &&
            formData?.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{data.firstName}</td>
                <td className="px-4 py-2">{data.lastName}</td>
                <td className="px-4 py-2">{data.gender}</td>
                <td className="px-4 py-2">{data.language}</td>
                <td className="px-4 py-2">{data.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
