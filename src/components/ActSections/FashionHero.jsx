import React from 'react';
import HeroBG from '../../assets/images/HeroBG.png';
import RecyclingHeart from '../../assets/images/Heart.png';
import Globe from '../../assets/images/Globe.png';
import SuperheroBoy from '../../assets/images/Super_Hero.png';

const FashionHero = () => {
  return (
    <section className="relative w-full h-min-screen">
      {/* Background Image */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBG})` }}
      >
        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          
          {/* Text Content */}
          <div className="text-center mt-30 mb-8 lg:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black winky-font mb-4">
              Be a Fashion Hero!
            </h1>
            <p className="text-black font-['Inter'] text-base sm:text-lg lg:text-xl font-normal mb-2">
              You can help the Earth by making cool choices with your clothes!
            </p>
            <p className="text-black font-['Inter'] text-base sm:text-lg lg:text-xl font-normal">
              Let's turn small steps into big superhero actions
            </p>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-row items-center justify-center gap-8 lg:gap-12 relative mb-10">
            
            {/* Superhero Boy Placeholder - You can add the actual image here */}
            <div className="w-32 h-auto lg:w-80 flex items-center justify-center">
               <img src={SuperheroBoy} alt="Superhero Boy" className="w-full h-full object-contain" />
            </div>

            {/* Icons */}
            <div className="flex flex-col items-center gap-6">
              {/* Green Heart with Recycling Symbol */}
              <div className="relative self-start -ml-8 lg:-ml-15">
                <img
                  src={RecyclingHeart}
                  alt="Green Heart with Recycling Symbol"
                  className="w-20 h-auto lg:w-40 object-contain"
                />
              </div>

              {/* Blue Globe with T-shirt */}
              <div className="relative">
                <img
                  src={Globe}
                  alt="Blue Globe with T-shirt"
                  className="w-16 h-auto lg:w-35 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionHero;
