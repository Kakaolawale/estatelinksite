import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProperties } from '../../redux/propertySlice';
import { BiBeach } from 'react-icons/bi';
import { FaBed, FaBath, FaCar, FaTree, FaSwimmingPool, FaBuilding } from 'react-icons/fa'; // Import additional icons

const BuyHomes = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <div className="container bg-estatelinkpurple text-estatelinkwhite mt-20 pt-20 mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Real Estate & Homes For Sale</h1>
      <p className="mb-6">{properties.length} results</p>
      {properties.map((property) => (
        <div key={property.id} className="bg-white text-gray-800 p-6 my-4 shadow-lg rounded-lg">
          <img 
            src={property.imageUrl} 
            alt={property.name} 
            className="w-full object-cover rounded-lg h-64 mb-4" 
          />
          <h2 className="text-2xl font-semibold mb-2 mt-4">{property.propertyName}</h2>
          <p className="text-gray-700 mb-2">{property.description}</p>
          <p className="text-gray-700 font-semibold text-lg mb-2">{`Price: N${property.price.toLocaleString()}`}</p>
          <div className="flex space-x-2 mb-2 text-lg text-gray-600">
            <span>{property.bedrooms} <FaBed /></span>
            <span>{property.bathrooms} <FaBath /></span>
            <span>{property.squareFeet} Sq Ft <FaBuilding /></span>
          </div>
          <div className="flex space-x-2 mb-2 text-lg">
            {property.amenities.includes('beach') && <BiBeach className="text-blue-500" />}
            {property.amenities.includes('garage') && <FaCar className="text-green-500" />}
            {property.amenities.includes('pool') && <FaSwimmingPool className="text-lightBlue-500" />}
            {property.amenities.includes('garden') && <FaTree className="text-green-600" />}
            {/* Additional feature icons can be added here */}
          </div>
          <p className="text-sm text-gray-500 mb-2">{`Location: ${property.location}`}</p>
          <p className="text-sm text-gray-500 mb-2">{property.address}</p>
          <p className="text-sm text-gray-500">{`Year Built: ${property.yearBuilt}`}</p>
        </div>
      ))}
    </div>
  );
};

export default BuyHomes;

