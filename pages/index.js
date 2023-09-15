// pages/index.js (or other pages)
import React from 'react';
import Head from 'next/head';
import Layouts from '../components/Layouts';
import EstatelinkPrompt from '../components/EstatelinkPrompt';
import EstatelinkAnimatedText from '../components/EstatelinkAnimatedText';



const Home = () => {
  return (
  
      <div>
        <Head>
          <title>Adain Technologies Ltd.</title>
          <meta name="Adain" content="...people, technologies and possibilities." />
          <link rel="Adain Logo" href="/favicon.ico" />
        </Head>
        <h1 className='text-adainwhite'>Home Page</h1>
     
      </div>
   
  );
};

export default Home;
