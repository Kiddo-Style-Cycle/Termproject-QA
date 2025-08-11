import React, { useState } from 'react';
import Button from "../Button";
import good_pay from "../../assets/images/Good_pay.png";
import not_enough from "../../assets/images/Notenough.png";
import very_good_pay from "../../assets/images/Verygoodpay.png";

import dirty_unsafe from "../../assets/images/Dirtyandunsafe.png";
import safe from "../../assets/images/Safe.png";
import clean_safe from "../../assets/images/Safer.png";

const Mission3 = ({ onNext, onGoBack }) => {
  const [payLevel, setPayLevel] = useState(50);
  const [workplaceLevel, setWorkplaceLevel] = useState(50);
  const [workerHappiness, setWorkerHappiness] = useState(50);

  // Calculate worker happiness based on pay and workplace conditions
  const calculateHappiness = (pay, workplace) => {
    return Math.round((pay + workplace) / 2);
  };

  // Update happiness when sliders change
  const handlePayChange = (value) => {
    setPayLevel(value);
    setWorkerHappiness(calculateHappiness(value, workplaceLevel));
  };

  const handleWorkplaceChange = (value) => {
    setWorkplaceLevel(value);
    setWorkerHappiness(calculateHappiness(payLevel, value));
  };

  const applyChanges = () => {
    // Show some feedback or trigger completion
    alert(`Great! Worker happiness is now ${workerHappiness}%!`);
  };

  return (
    <section className="w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start relative py-8">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center pb-8 sm:pb-12 lg:pb-16">
        {/* Mission Header */}
        <div className="text-center mb-6 sm:mb-8 mt-6 sm:mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold winky-font mb-6 sm:mb-10 text-[#1E1E1E]">
            Make a Happy Factory
          </h1>
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#1E1E1E] mb-2">
              Change how much workers get paid and how safe the factory is.
            </p>
            <p className="text-base sm:text-lg text-[#1E1E1E]">
              Let's see if we can make the workers feel happier!
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-6 sm:mb-8 w-full max-w-xs mx-auto">
          <Button
            variant="outline"
            size="large"
            onClick={onGoBack}
            className="rounded-xl"
          >
            Back to Story 3
          </Button>
        </div>

        {/* Main Container with FCFCFC background - from Worker Happiness down */}
        <div className="bg-[#FCFCFC] rounded-xl p-8 w-full max-w-4xl shadow-lg">
            {/* Worker Happiness Indicator and Apply Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 w-full">
              {/* Worker Happiness Indicator - Styled */}
              <div className='flex items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-100'>
                <div className='bg-[#4CAF50] text-white px-6 py-4 font-medium font-[Inter] sm:text-lg text-sm'>
                  Worker Happiness
                </div> 
                <div className="sm:text-lg text-sm font-medium text-[#1E1E1E] font-[Inter] bg-[#F8F9FA] px-6 py-4 flex items-center min-w-[200px]">
                  <span className="sm:text-xl text-sm font-bold text-[#4CAF50]">{workerHappiness}%</span>
                  <span className="sm:text-sm text-xs text-gray-500 ml-2 font-normal">(Let's improve it!)</span>
                </div>
              </div>
              
              {/* Apply Changes Button */}
              <Button
                variant="green_outline"
                size="large"
                onClick={applyChanges}
                className="rounded-xl"
              >
                Apply Changes
              </Button>
            </div>
          

            {/* Control Sections */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 w-full">
          {/* Pay Section */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium winky-font mb-4 sm:mb-6 text-[#616161] text-center">
              Pay
            </h3>
            
            {/* Pay Image - changes based on slider value */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 flex items-center justify-center">
              <img 
                src={payLevel <= 33 ? not_enough : payLevel <= 66 ? good_pay : very_good_pay}
                alt="Pay level indicator"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Pay Slider */}
            <div className="w-full max-w-xs sm:max-w-sm mb-3 sm:mb-4 relative">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={payLevel}
                  onChange={(e) => handlePayChange(parseInt(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer slider bg-transparent"
                  style={{
                    background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${payLevel}%, #E5EBE9 ${payLevel}%, #E5EBE9 100%)`
                  }}
                />
                
              </div>
            </div>

            {/* Pay Labels */}
            <div className="flex justify-between w-full max-w-xs sm:max-w-sm text-xs sm:text-sm text-gray-600">
              <span>Not enough</span>
              <span>Good pay</span>
              <span>Very good pay</span>
            </div>
          </div>

          {/* Workplace Section */}
          <div className="flex-1 flex flex-col items-center mt-4 md:mt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium winky-font mb-4 sm:mb-6 text-[#616161] text-center">
              Workplace
            </h3>
            
            {/* Workplace Image - changes based on slider value */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 flex items-center justify-center">
              <img 
                src={workplaceLevel <= 33 ? dirty_unsafe : workplaceLevel <= 66 ? safe : clean_safe}
                alt="Workplace safety indicator"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Workplace Slider */}
            <div className="w-full max-w-xs sm:max-w-sm mb-3 sm:mb-4 relative">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={workplaceLevel}
                  onChange={(e) => handleWorkplaceChange(parseInt(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer slider bg-transparent"
                  style={{
                    background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${workplaceLevel}%, #E5EBE9 ${workplaceLevel}%, #E5EBE9 100%)`
                  }}
                />
                
              </div>
            </div>

            {/* Workplace Labels */}
            <div className="flex justify-between w-full max-w-xs sm:max-w-sm text-xs sm:text-sm text-gray-600">
              <span>Dirty and unsafe</span>
              <span>Safe</span>
              <span>Clean and safe</span>
            </div>
          </div>
        </div>
        </div>
      </div>


    </section>
  );
};

export default Mission3;