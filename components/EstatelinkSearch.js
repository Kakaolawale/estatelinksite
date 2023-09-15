import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon
// ... other imports

const EstatelinkSearch = () => {
  return (
    <div className="bg-estatelinkyellow p-4 mb-8 rounded-lg shadow-lg mx-auto sm:w-2/3 lg:w-1/3">
      
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter location or property type"
          className="py-2 px-4 w-full rounded-l-md   focus:outline-none "
        />
        <button className="bg-blue-500 text-estatelinkwhite py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none">
          <FaSearch /> {/* Include the icon here */}
        </button>
      </div>
    </div>
  );
};

export default EstatelinkSearch;

