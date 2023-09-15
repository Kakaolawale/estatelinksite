{/*import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import AdainSplashScreen from '../components/AdainSplashScreen';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AdainSplashScreen />
      <Layouts showNavbarAndFooter={true}>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}

export default MyApp; */}

import React from 'react';
import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import EstatelinkSplashScreen from '../components/EstatelinkSplashScreen';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      <EstatelinkSplashScreen />
      <Layouts showNavbarAndFooter={true}>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}

export default MyApp;


