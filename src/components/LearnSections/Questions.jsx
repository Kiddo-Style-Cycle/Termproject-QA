import React from "react";
import WaterImage from "../../assets/images/water.png";
import SuperHero from "../../assets/images/SuperHero.png";

const Questions = () => {
  return (
    <section className="py-16 px-6 bg-[#C7F0D8]">
      <div className="max-w-6xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Earth-Friendly Fashion */}
          <div className="bg-white rounded-3xl pt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col items-center text-center flex-grow">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#4CAF50] mb-6 winky-font">
                What Does
                <br />
                <span className="bg-[#FFF6A7]">"Earth-Friendly Fashion"</span>
                <br />
                Mean?
              </h3>

              {/* Description */}
              <div className="mb-8 px-8">
                <p className="text-[#616161] text-lg font-['Inter'] leading-relaxed mb-4">
                  It means{" "}
                  <strong>
                    <u>making and wearing clothes</u>
                  </strong>
                  <br />
                  <strong>
                    <u>in a way that is good for the Earth and for people.</u>
                  </strong>
                </p>
                <p className="text-base text-[#616161] font-['Inter']">
                  It's like being a fashion hero
                  <br />
                  who helps protect the planet!
                </p>
              </div>

              {/* SuperHero Image */}
              <div className="flex-grow flex items-end w-full px-8 pb-8">
                <img
                  src={SuperHero}
                  alt="Superhero character illustration"
                  className="w-full h-auto object-contain justify-center max-h-52"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Water Facts */}
          <div className="bg-white rounded-3xl pt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col items-center text-center flex-grow">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#4CAF50] mb-6 winky-font">
                Did You Know?
                <br />
                <span className="bg-[#FFF6A7]">Water Facts</span>
              </h3>
              <br />

              {/* Description */}
              <div className="mb-8 px-8">
                <p className="text-[#616161] text-lg leading-relaxed">
                  It{" "}
                  <strong>
                    takes a lot of water to make just one t-shirt.
                  </strong>
                </p>
                <p className="text-gray-600 text-base font-semibold">
                  <u>Enough for one person to drink for over 2 years!</u>
                </p>
              </div>

              {/* Water Image */}
              <div className="flex-grow flex items-end w-full">
                <img
                  src={WaterImage}
                  alt="Water tap and pool illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
