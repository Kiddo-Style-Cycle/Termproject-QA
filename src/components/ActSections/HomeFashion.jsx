import React from 'react';
import Jeans from '../../assets/images/Jeans.png';
import PocketOrganizer from '../../assets/images/PocketOrganizer.png';
import Arrow from '../../assets/images/ArrowFatLineRight.svg';
import Socks from '../../assets/images/socks.png';
import Puppets from '../../assets/images/puppets.png';
import TShirt from '../../assets/images/T-shirt.png';
import ToteBag from '../../assets/images/bag.png';


const HomeFashion = () => {
  return (
    <section className="w-full bg-[#FFF0D2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
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
                <div className="flex items-center gap-4">
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
              <div className="flex items-center gap-4">
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
              <div className="flex items-center gap-4">
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
            <div className="flex items-start gap-2 bg-[#FAFAFA] p-3 rounded-full">
              <div className="text-yellow-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
                Ask an adult for help if you need scissors or glue!
              </p>
            </div>
          </div>

          {/* Section 2: Closet Detective */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 winky-font mb-3">
              Closet Detective
            </h2>
            <p className="text-gray-700 font-['Inter'] text-lg mb-6">
              Become a fashion detective! Look in your closet and sort your clothes
            </p>
            
            {/* Checklist */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Still Awesome? Keep it!</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Too Small or Don't Wear? Give to someone else!</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Worn Out? Turn it into something fun!</span>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded-full">
              <div className="text-yellow-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
                Use stickers or labels for each pile!
              </p>
            </div>
          </div>

          {/* Section 3: Nature Dye Lab */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 winky-font mb-3">
              Nature Dye Lab
            </h2>
            <p className="text-gray-700 font-['Inter'] text-lg mb-6">
              Make colorful dyes from your kitchen!
            </p>
            
            {/* Dye Cards */}
            <div className="space-y-4 mb-6">
              {/* Red Dye */}
              <div className="bg-red-700 rounded-lg p-4 text-white">
                <h3 className="font-bold text-lg mb-2">Red</h3>
                <div className="w-12 h-12 bg-red-600 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xs">🍎</span>
                </div>
                <p className="text-sm">Beets or berries</p>
              </div>

              {/* Yellow Dye */}
              <div className="bg-yellow-600 rounded-lg p-4 text-white">
                <h3 className="font-bold text-lg mb-2">Yellow</h3>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xs">🧅</span>
                </div>
                <p className="text-sm">Turmeric or onion skins</p>
              </div>

              {/* Blue Dye */}
              <div className="bg-blue-700 rounded-lg p-4 text-white">
                <h3 className="font-bold text-lg mb-2">Blue</h3>
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xs">🥬</span>
                </div>
                <p className="text-sm">Red cabbage & baking soda</p>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded-full">
              <div className="text-yellow-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
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
