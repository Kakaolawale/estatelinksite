import { TypeAnimation } from 'react-type-animation';
import EstatelinkSearch from './EstatelinkSearch';

const EstatelinkAnimatedText = () => {
  return (
    <div className='relative'>
      {/* Background Image with Gradient Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url('/images/estatelinkimage6.jpg')`, // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
          }}
        ></div>
      </div>
      
      {/* Text Content */}
      <div className='relative z-10 mx-4 pt-20 mt-10'>
        <TypeAnimation 
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'BUY!',
            2000, // wait 1s before replacing 
            'RENT!',
            2000, // wait 2
            `SALES AND 
            CONSTRUCTION!`,
            2000, // wait 2
            'Estatelink!',
            2000, 
          ]}
          wrapper="span"
          speed={20} // speed set to 20 seconds
          className="flex items-center mt-10 pt-8 pb-8 text-6xl font-extrabold mx-4 px-10 justify-center tracking-tighter text-estatelinkyellow"
          repeat={Infinity} // let the animation repeat forever
        />
        <br />
        <h2 className="text-2xl mb-8 text-center font-semibold text-estatelinkwhite">Find Your <span className='text-estatelinkyellow font-bold'>Dream Home</span></h2>
        <EstatelinkSearch />
      </div>
    </div>
  );
};

export default EstatelinkAnimatedText;
