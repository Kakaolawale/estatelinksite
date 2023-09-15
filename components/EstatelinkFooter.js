import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// I created a footer for the app.
const EstatelinkFooter = () => {
  return (
    // I used the footer element of html to wrapp all three divs i needed to make the footer.
    <footer className="bg-adainfooterblack text-adainwhite py-10">
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:justify-between md:items-center items-center">
       
        <div className="mx-8 px-10 flex flex-col space-y-4 mb-6 md:mb-0 text-center"> {/* This is the first div to wrapp the Getin Touch */}
          <p className='mx-8 font-bold'>Get in Touch</p>
          <div className="mx-8 text-adainyellow flex space-x-4">
            <FaFacebook className="mx-8 text-2xl" />
            <FaTwitter className="mx-8 text-2xl" />
            <FaInstagram className="mx-8 text-2xl" />
            <FaLinkedin className="mx-8 text-2xl" />
          </div>
          <p className='mx-8'>First floor, Sky Blue Building beside Beam clinic, Along Aso B Mararaba Road, Nasarawa State</p>
          <p className='mx-8'>info@adain.ng</p>
        </div>
        
     
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center"> {/* This is the second div to wrapp the Learn More */}
          <p className='mx-8 font-bold'>Learn More</p>
          <a className='mx-8' href="#">Home</a>
          <a className='mx-8' href="#">Products and Services</a>
          <a className='mx-8' href="#">Job</a>
          <a className='mx-8' href="#">About Us</a>
          <a className='mx-8' href="#">Blog</a>
          <a className='mx-8' href="#">Contact</a>
        </div>
        
    
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center">{/* This is the third div to wrapp the Newsletter */}
        <p className='mx-8 font-bold'>Newsletter</p>
          <p className="mx-8 mb-4">Subscribe to our newsletter to get our news & deals delivered to you</p>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mx-8 border border-adainyellow px-2 py-1 rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="mx-8 bg-adainyellow text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default EstatelinkFooter;
