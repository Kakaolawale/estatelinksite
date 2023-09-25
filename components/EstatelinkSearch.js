import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase'; // Adjust path as needed
import { setProperties } from '../redux/propertySlice';
import { useDispatch } from 'react-redux';


const EstatelinkSearch = () => {
  
  const [searchTerm, setSearchTerm] = useState(''); 
 const dispatch = useDispatch();


 const handleSearch = async () => {
  console.log('Data fetched');
  console.log('Search Term: ', searchTerm);

  if (searchTerm) {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const q = query(
      collection(db, "properties"), 
      where("location", "==", lowercaseSearchTerm)
    );

    try {
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      dispatch(setProperties(results));
    } catch (error) {
      console.error("Error fetching properties: ", error);
    }
  }
};

  return (
    <div className="bg-estatelinkyellow p-4 mb-8 mt-8 rounded-lg shadow-lg mx-auto sm:w-2/3 lg:w-1/3">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your location choice of property"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="py-2 px-4 w-full rounded-l-md focus:outline-none "
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 text-estatelinkwhite py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          <FaSearch /> {/* Include the icon here */}
        </button>
      </div>
      
      </div>
  );
};

export default EstatelinkSearch;