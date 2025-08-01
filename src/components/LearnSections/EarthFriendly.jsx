import React from "react";
import Pic1 from "../../assets/images/Pic_1.png";
import Pic2 from "../../assets/images/Pic_2.png";

const EarthFriendly = () => {
  return (
    <section className="py-16 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        {/* Green Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#4CAF50] rounded-[20px]">
            <span className="text-[#4CAF50] font-medium text-xl winky-font">
              Clothes Trading
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#1E1E1E] mb-16 winky-font">
          All About Earth-Friendly Fashion
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="flex flex-col text-center">
              <div className="relative">
                <img
                  src={Pic1}
                  alt="Happy kids with new clothes"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-md sm:text-lg text-black leading-relaxed font-['Inter']">
                    It's a fun way to get "new" clothes without going to the
                    store.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="flex flex-col text-center">
              <div className="relative">
                <img
                  src={Pic2}
                  alt="Happy kids with new clothes"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-md sm:text-lg text-black leading-relaxed font-['Inter']">
                    You can trade them with your friends for different clothes!
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="flex flex-col text-center">
              <div className="relative">
                <img
                  src={Pic1}
                  alt="Happy kids with new clothes"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-md sm:text-lg text-black leading-relaxed font-['Inter']">
                    Do you have clothes you don't wear anymore?
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthFriendly;
