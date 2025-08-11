import React from "react";

import Factory from "../../assets/images/Factory1.png";
import Lina from "../../assets/images/Lina.png";
import GoodPay from "../../assets/images/goodpay.png";
import SafePlaces from "../../assets/images/safeplaces.png";
import Cloud from "../../assets/images/Cloud.png";
import Button from "../Button";

const Story3 = ({ onNext, onGoBack }) => {
  return (
    <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start relative">
     

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center pb-20">
        {/* Story Header */}
        <div className="text-center mb-6 sm:mb-8 mt-4 sm:mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold winky-font mb-4 sm:mb-6 text-[#1E1E1E]">
            Be Kind to Workers
          </h1>
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#1E1E1E] mb-2">
              Lina learns that clothes are made by real people
            </p>
            <p className="text-base sm:text-lg text-[#1E1E1E] mb-2">
              in big buildings called factories.
            </p>
            <p className="text-base sm:text-lg text-[#1E1E1E]">
              But some factories don't treat people nicely.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 w-full sm:w-auto justify-center items-center">
          <Button
            variant="outline"
            size="large"
            onClick={onGoBack}
            className="rounded-xl"
          >
            Go back
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={onNext}
            className="rounded-xl"
          >
            Mission 3
          </Button>
        </div>

        {/* Worker Rights Icons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 mb-8 sm:mb-12 bg-white/50 bg-opacity-50 rounded-2xl p-4 sm:p-6 shadow-lg w-full max-w-6xl">
          {/* Good Pay */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
              <img
                src={GoodPay}
                alt="Good pay image"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            <div>
              <p className="font-normal text-sm sm:text-base text-[#5D5D5D] font-[Inter]">
                Good pay
              </p>
              <p className="text-sm sm:text-base text-[#5D5D5D] font-[Inter]">
                (so they can live well)
              </p>
            </div>
          </div>

          {/* Safe Places */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
              <img
                src={SafePlaces}
                alt="Safe places to work icon"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            <div>
              <p className="font-normal text-sm sm:text-base text-[#5D5D5D] font-[Inter]">
                Safe places to work
              </p>
              <p className="text-sm sm:text-base text-[#5D5D5D] font-[Inter]">
                (clean, not dangerous)
              </p>
            </div>
          </div>
        </div>
        {/* Factory, Lina, and Cloud Scene with Position Control */}
        <div className="relative w-full h-96 scale-50  sm:scale-100">
          {/* Factory Image */}
          <div className="absolute left-0 top-[10px] ">
            <img
              src={Factory}
              alt="Factory building"
              className="w-80 h-auto"
            />
          </div>

          {/* Lina Character */}
          <div className="absolute left-[350px] top-[100px]">
            <img src={Lina} alt="Lina" className="w-50 h-auto" />
          </div>

          {/* Cloud Speech Bubble */}
          <div className="absolute right-[50px] top-1/8 transform -translate-y-1/4">
            <div className="relative">
              <img src={Cloud} alt="Speech bubble" className="w-64 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story3;
