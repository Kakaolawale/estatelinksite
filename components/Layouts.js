import React from 'react';
import EstatelinkFooter from './EstatelinkFooter';
import EstatelinkNavBar from './EstatelinkNavBar';


// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children, showNavbarAndFooter }) => {
  return (
    <div>
      {showNavbarAndFooter && <EstatelinkNavBar />} 
      {children}
      {showNavbarAndFooter && <EstatelinkFooter />}
    </div>
  );
};

export default Layouts;

