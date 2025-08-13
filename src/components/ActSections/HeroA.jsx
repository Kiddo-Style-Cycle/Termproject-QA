import React from 'react';
import RecyclingHeart from '../../assets/images/Heart.png';
import GlobeShirt from '../../assets/images/Circle.png';

const HeroA = () => {
  return (
    <section className="mt-0 pt-[80px] md:pt-[88px]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#B36F00] flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 py-8 sm:py-10">
        {/* LEFT CONTENT */}
        <div className="text-left max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl order-1">
          <h1 className="text-3xl md:text-5xl font-bold text-white winky-font mb-3 sm:mb-4 lg:mb-6">
            Act
          </h1>
          <p className="text-white font-['Inter'] text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-4 sm:mb-6">
            Now it's your turn to shine!{" "}
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              Try fun ways to help your clothes and the planet.
            </span>
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] aspect-[4/3] relative order-2 flex flex-col items-center justify-center gap-4">
          <img
            src={RecyclingHeart}
            alt="Recycling Heart"
            className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
          />
          <img
            src={GlobeShirt}
            alt="Globe with T-shirt"
            className="w-32 h-32 lg:w-40 lg:h-40 object-contain self-end mr-0 lg:mr-6"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroA
