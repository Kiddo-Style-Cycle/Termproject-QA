import React from 'react';
import Jeans from '../../assets/images/Jeans.png';
import PocketOrganizer from '../../assets/images/PocketOrganizer.png';
import Arrow from '../../assets/images/ArrowFatLineRight.svg';
import Socks from '../../assets/images/socks.png';
import Puppets from '../../assets/images/puppets.png';
import TShirt from '../../assets/images/T-shirt.png';
import ToteBag from '../../assets/images/bag.png';
import Lightbulb from '../../assets/icons/Lightbulb.svg';
import Check from '../../assets/icons/CheckCircle.svg';
import Beets from '../../assets/images/Beets.png';
import Onion from '../../assets/images/Tumeric.png';
import Cabbage from '../../assets/images/RedCabbage.png';


const HomeFashion = () => {
  return (
    <section className="w-full bg-[#FFF0D2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-[#121717] text-2xl md:text-4xl font-medium winky-font mb-4">
            <span className="text-[#B36F00] mb-2">At Home</span><br/> Fun With Fashion
          </h1>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Section 1: Make-It-New Magic */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#121717] winky-font mb-3 flex justify-center items-center">
              Make-It-New Magic
            </h2>
            <p className="text-[#747474] font-['Inter'] text-base mb-6 flex justify-center items-center">
              Turn old clothes into cool new things!
            </p>
            
            {/* Transformation Examples */}
            <div className="space-y-4 mb-6">
                {/* Jeans to Pocket Organizer */}
                <div className="flex items-center gap-4 justify-center">
                  <div className="relative">
                    <img src={Jeans} alt="Jeans" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Jeans</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={Arrow} alt="Arrow" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="relative">
                    <img src={PocketOrganizer} alt="Pocket Organizer" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Pocket Organizer</p>
                    </div>
                  </div>
                </div>

              {/* Socks to Puppets */}
              <div className="flex items-center gap-4 justify-center">
                  <div className="relative">
                    <img src={Socks} alt="Socks" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Socks</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={Arrow} alt="Arrow" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="relative">
                    <img src={Puppets} alt="Puppets" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Puppets</p>
                    </div>
                  </div>
                </div>

              {/* T-shirt to Tote Bag */}
              <div className="flex items-center gap-4 justify-center">
                  <div className="relative">
                    <img src={TShirt} alt="Socks" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Socks</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={Arrow} alt="Arrow" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="relative">
                    <img src={ToteBag} alt="Puppets" className="w-[160px] h-auto object-contain" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-normal text-base">Puppets</p>
                    </div>
                  </div>
                </div>
              
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-[#FAFAFA] h-12 w-fit p-4 rounded-full justify-center items-center">
              <div>
                <img src={Lightbulb} alt="Lightbulb" className="w-5 h-5 object-contain " />
              </div>
              <p className="text-sm text-[#1E1E1E] font-normal">
                Ask an adult for help if you need scissors or glue!
              </p>
            </div>
          </div>

          {/* Section 2: Closet Detective */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#121717] winky-font mb-3 text-center">
              Closet Detective
            </h2>
            <p className="text-[#747474] font-['Inter'] text-base mb-6 text-center">
              Become a fashion detective! Look in your closet and sort your clothes
            </p>
            
            {/* Checklist */}
            <div className="space-y-4 mb-6 flex flex-col items-start">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#FFE6B3] rounded-full flex items-center justify-center">
                    <img src={Check} alt="Check" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#B36F00] font-bold text-base">Still Awesome?</p>
                    <p className="text-[#747474] font-normal text-base">Keep it!</p>
                    </div>
                </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFE6B3] rounded-full flex items-center justify-center">
                  <img src={Check} alt="Check" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                    <p className="text-[#B36F00] font-bold text-base">Too Small or Don't Wear?</p>
                    <p className="text-[#747474] font-normal text-base">Give to someone else!</p>
                    </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFE6B3] rounded-full flex items-center justify-center">
                  <img src={Check} alt="Check" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                    <p className="text-[#B36F00] font-bold text-base">Worn Out?</p>
                    <p className="text-[#747474] font-normal text-base">Turn it into something fun!</p>
                    </div>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-[#FAFAFA] h-12 p-4 rounded-full w-fit">
              <div>
                <img src={Lightbulb} alt="Lightbulb" className="w-5 h-5 object-contain " />
              </div>
              <p className="text-sm text-[#1E1E1E] font-normal">
                Use stickers or labels for each pile!
              </p>
            </div>
          </div>

          {/* Section 3: Nature Dye Lab */}
          <div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#121717] winky-font mb-3 text-center">
              Nature Dye Lab
            </h2>
            <p className="text-[#747474] font-['Inter'] text-base mb-6 text-center">
              Become a fashion detective! Look in your closet and sort your clothes
            </p>
            
            {/* Dye Cards */}
            <div className="space-y-4 mb-6">
            {/* Red Dye */} 
              <div className="relative">
                <img src={Beets} alt="Beets" className="w-full h-auto object-contain" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <h3 className="bg-red-500 font-bold text-sm mb-2 text-white rounded-full px-4 py-1 w-fit">Red</h3>
                  <p className="text-base text-white font-normal">Beets or berries</p>
                </div>
              </div>

              {/* Yellow Dye */}
              <div className="relative">
                <img src={Onion} alt="Beets" className="w-full h-auto object-contain" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <h3 className="bg-yellow-500 font-bold text-sm mb-2 text-white rounded-full px-4 py-1 w-fit">Yellow</h3>
                  <p className="text-base text-white font-normal">Turmeric or onion skins</p>
                </div>
              </div>

              {/* Blue Dye */}
              <div className="relative">
                    <img src={Cabbage} alt="Beets" className="w-full h-auto object-contain" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <h3 className="bg-[#1370DB] font-bold text-sm mb-2 text-white rounded-full px-4 py-1 w-fit">Blue</h3>
                  <p className="text-base text-white font-normal">Red cabbage & baking soda</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-[#FAFAFA] h-12 p-4 rounded-full">
            <div>
                <img src={Lightbulb} alt="Lightbulb" className="w-5 h-5 object-contain " />
              </div>
              <p className="text-sm text-[#1E1E1E] font-normal">
                Adult needed for this messy (but fun!) project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFashion;
