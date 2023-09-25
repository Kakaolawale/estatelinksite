import React from 'react';
import { useSelector } from 'react-redux';

const EstatelinkSearchResult = () => {
  const properties = useSelector((state) => state.property.properties);

  return (
    <div className="lg:w-1/2 sm:w-1/3 mx-auto p-4">
      {properties.length > 0 ? (
        properties.map((property) => (
          <div key={property.id} className="bg-estatelinkwhite flex flex-col items-center p-4 my-4 shadow-md rounded-md">
            <img 
              src={property.imageUrl} 
              alt={property.name} 
              className="w-full object-cover rounded-md" // you can add additional styling here
            />
            <h2 className="text-2xl font-semibold mb-2 mt-4">{property.name}</h2>
            <p className="text-estatelinkblack bg-estatelinkyellow rounded-xl px-3">{property.description}</p>
            <p className="text-estatelinkblack">{property.price}</p>
            <p className="text-sm text-estatelinkblack mt-2">{property.location}</p>
          </div>
        ))
      ) : (
        <div className="bg-estatelinkwhite p-4 shadow-md rounded-md">
          <p className="text-estatelinkblack text-center">Search and select properties in your location.</p>
        </div>
      )}
    </div>
  );
};

export default EstatelinkSearchResult;

