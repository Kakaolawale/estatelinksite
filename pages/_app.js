

import React from 'react';
import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import store from '../redux/store';
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
     <Layouts>
      <Component {...pageProps} />
      </Layouts>
      </Provider>
    </div>
  );
}

export default MyApp;


