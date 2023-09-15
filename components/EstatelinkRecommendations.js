import React from 'react';

const EstatelinkRecommendations = () => {
  return (
    <div className="bg-estatelinkyellow px-4 py-8 mb-20 pb-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Recommendations underway</h2>
        <p className="text-lg text-estatelinkwhite mb-8">
          Search and save a few homes you like, and we'll find recommendations for you.
        </p>
        <div className="flex flex-wrap mx-2">
          {/* Image slides */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="relative">
              <img
                src="/images/estatelinkimage1.jpg" // Replace with your image source
                alt="Recommendation 1"
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
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="relative">
              <img
                src="/images/estatelinkimage2.jpg" // Replace with your image source
                alt="Recommendation 2"
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
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="relative">
              <img
                src="/images/estatelinkimage6.jpg" // Replace with your image source
                alt="Recommendation 3"
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
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="relative">
              <img
                src="/images/estatelinkimage4.jpg" // Replace with your image source
                alt="Recommendation 4"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatelinkRecommendations;
