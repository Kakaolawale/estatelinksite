
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaCaretDown } from 'react-icons/fa';

function EstatelinkNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

 {/* I made a function here to toggle the dropdown button whenever 
 the user want to change the state of the dropdown to true from false... */}

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
   {/* I made a function here to handle what the signin button 
  should do, you can alter it it to work with your firebase... */}

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  
  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 shadow-lg fixed lg:mb-8 bg-estatelinkwhite backdrop-blur-3xl hover:bg-estatelinkyellow opacity-100 z-50 hover:bg-avista2">
      <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}>
     
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex text-adainblack hover:text-estatelinkwhite items-center justify-between py-5">
              <a href="/" className="flex items-center">
                <Image src="/images/estatelinklogo.svg" width={60} height={50} alt="Avista Beach Resort Logo" />
                <p className='text-sm p-2 text-adainwhite font-bold tracking-widest'>ESTATELINK</p>
              </a>
              <div className="md:hidden text-adainblack hover:text-estatelinkwhite">
                <button className="text-adainblack hover:text-adainwhite pt-2 rounded-md" onClick={handleClick}>
                  {navbar ? (
                    <svg className="text-adainblack hover:text-adainwhite icon icon-tabler icon-tabler-letter-x" fill="none" height="24" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                    <line x1="7" x2="17" y1="4" y2="20"/>
                    <line x1="17" x2="7" y1="4" y2="20"/>
                    </svg>
                    
                  ) : (
                    <div className='text-adainblack hover:text-estatelinkwhite'>
                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="2" fill="#1B1919"/>
                   <rect y="3" width="21" height="2" fill="#1B1919"/>
                   <rect y="6" width="21" height="2" fill="#1B1919"/>
                   </svg>
                   </div>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`text-adainblack hover:text-adainwhite flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className="space-x-4 text-lg">
                
              <ul className="mb-4 mt-2 items-center pr-20 font-medium text-sm... justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
  

   
                  
  <li className="relative text-adainblack hover:text-estatelinkwhite">
    <button onClick={toggleDropdown} className="nav-link flex items-center">
      Products & Services
      <FaCaretDown className="ml-1" />
    </button>

   

    {isDropdownOpen && (
      <div className="font-bold absolute py-8 my-4 text-sm  text-adainblack hover:text-estatelinkwhite">
        <Link href="/quickmed-api-url" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-adainwhite hover:text-estatelinkwhite ">
         Partners
        </Link>
        <Link href="https://www.space1unicorn.com/" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-esatelinkwhite hover:text-adainblack">
         Projects
        </Link>
       </div>
          )}
         </li>

         
                  
                  <li className={`text-adainblack hover:text-estatelinkwhite ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/navlinks/about" onClick={() => handleClick('about')}>
                      About Us
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-estatelinkwhite ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/experiences" onClick={() => handleClick('experiences')}>
                   Buy
                    </Link>
                  </li>
                  
                  <li className={`text-adainblack hover:text-estatelinkwhite  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/kitchen" onClick={() => handleClick('experiences')}>
                   Sell
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-estatelinkwhite pr-20 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/artgallery" onClick={() => handleClick('experiences')}>
                    Rent
                    </Link>
                  </li>
                  
               {/* I created a sign in button here to have an event listener of onclick 
               that it should listen to handle click function above 
              the parent codeblock... */}
                  
                  <div className="text-adainblack hover:text-adainwhite  bg-estatelinkyellow hover:bg-estatelinkpurple md:bg:hover-estatelinkyellow rounded-xl lg:m-8 p-1  w-42 shadow-md">
    <Link href="/bodynavigations/estatelinkupload" className="sm:px-20 font-bold tracking-tight text-estatelinkblack hover:text-estatelinkwhite pr-10 mr-4 text-lg  lg:my-20" onClick={() => handleClick('checkout')}>
     Upload Properties
    </Link>
  </div>
</ul>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </nav>
  );
}

export default EstatelinkNavBar;



