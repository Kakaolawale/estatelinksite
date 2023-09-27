// pages/buy-homes.js
import React from 'react';

const properties = [
  // ... properties list
];

const SellHomes = () => {
  return (
    <div className="container bg-estatelinkpurple text-estatelinkwhite mt-20 pt-20 mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Real Estate & Homes For Sale</h1>
      <p className="mb-6"> {properties.length} results</p>
      {properties.map(property => (
        <div key={property.id} className="border p-4 mb-6 rounded">
          <h2 className="text-xl font-medium">{property.address}</h2>
          <p className="text-lg text-green-600 font-semibold">{property.price}</p>
          <p>{property.beds} bds | {property.baths} ba | {property.sqft} sqft</p>
          {/* Add image slider or thumbnails here */}
        </div>
      ))}
    </div>
  );
};

export default SellHomes;
