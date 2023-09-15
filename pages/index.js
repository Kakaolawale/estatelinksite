// pages/index.js (or other pages)
import React from 'react';
import Head from 'next/head';
import Layouts from '../components/Layouts';
import EstatelinkPrompt from '../components/EstatelinkPrompt';
import EstatelinkAnimatedText from '../components/EstatelinkAnimatedText';
import EstatelinkRecommendations from '../components/EstatelinkRecommendations';
import EstatelinkHomecards from '../components/EstatelinkHomecards';



const Home = () => {
  return (
  
      <div className='bg-estatelinkpurple flex flex-col min-h-screen'>
        <Head>
          <title>Adain Technologies Ltd.</title>
          <meta name="Adain" content="...people, technologies and possibilities." />
          <link rel="Estatelink Logo" href="/favicon.ico" />
        </Head>

        <EstatelinkAnimatedText />
        <EstatelinkRecommendations />
        <EstatelinkHomecards />
     
      </div>
   
  );
};

export default Home;
