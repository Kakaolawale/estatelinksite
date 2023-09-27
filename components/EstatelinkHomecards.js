import React from 'react';

const EstatelinkHomecards = () => {
  return (
    <div className="bg-estatelinkyellow text-estatelinkwhite py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-estatelinkpurple rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
                <img
                  src="/images/estatelinkimage1.jpg" // Replace with your image source
                  alt="Buy a Home"
                  className="rounded-lg w-full h-auto"
                />
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Buy property</h3>
              <p className="text-gray-600 mb-4">
                Find your place with an immersive photo experience and the most listings,
                including things you won't find anywhere else.
              </p>
              <a href="/bodynavigations/buyhomes" className="text-estatelinkpurple hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-estatelinkyellow hover:bg-estatelinkblack">Browse Property</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-estatelinkpurple rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
                <img
                  src="/images/estatelinkimage2.jpg" // Replace with your image source
                  alt="Sell a Home"
                  className="rounded-lg w-full h-auto"
                />
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sell property</h3>
              <p className="text-gray-600 mb-4">
                No matter what path you take to sell your home, we can help you navigate a successful sale.
              </p>
              <a href="/bodynavigations/sellhomes" className="text-estatelinkpurple hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-estatelinkyellow hover:bg-estatelinkblack">Browse Property</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-estatelinkpurple rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
                <img
                  src="/images/estatelinkimage3.jpg" // Replace with your image source
                  alt="Rent a Home"
                  className="rounded-lg w-full h-auto"
                />
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Rent property</h3>
              <p className="text-gray-600 mb-4">
                We’re creating a seamless online experience – from shopping on the largest rental network,
                to applying, to paying rent.
              </p>
              <a href="/bodynavigations/renthomes" className="text-estatelinkpurple hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-estatelinkyellow hover:bg-estatelinkblack">Browse Homes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatelinkHomecards;
