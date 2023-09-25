// pages/index.js (or other pages)

import React, { useState } from 'react';
import Head from 'next/head';
import EstatelinkAnimatedText from '../components/EstatelinkAnimatedText';
import EstatelinkRecommendations from '../components/EstatelinkRecommendations';
import EstatelinkHomecards from '../components/EstatelinkHomecards';
import EstatelinkSearch from '../components/EstatelinkSearch';
import EstatelinkSearchResult from '../components/EstatelinkSearchResult';




const Home = () => {
  const [searchResults, setSearchResults] = useState([])
  return (
  
      <div className='bg-estatelinkpurple flex flex-col min-h-screen'>
        <Head>
          <title>Estatelink By Links Associate.</title>
          <meta name="Esatelink" content="Real Estate Building and Construction company.." />
          <link rel="Estatelink Logo" href="/favicon.ico" />
        </Head>
        <EstatelinkAnimatedText />
        <EstatelinkSearch />
        <EstatelinkSearchResult />
        <EstatelinkRecommendations />
        <EstatelinkHomecards />
       </div>
   
  );
};

export default Home;
