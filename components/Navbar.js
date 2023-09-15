import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl">ZillowClone</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Buy</a>
            <a href="#" className="hover:text-gray-300">Sell</a>
            <a href="#" className="hover:text-gray-300">Rent</a>
            {/* ...other nav links */}
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
