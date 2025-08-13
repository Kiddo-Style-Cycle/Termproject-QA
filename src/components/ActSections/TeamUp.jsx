import React from 'react';
import PickDay from '../../assets/icons/CalendarCheck.svg';
import Clothes from '../../assets/icons/Pants.svg';
import Pile from '../../assets/icons/SortAscending.svg';
import Turn from '../../assets/icons/Dress.svg';
import GiveBack from '../../assets/icons/HandHeart.svg';

const TeamUp = () => {
  return (
    <section className="w-full h-min-screen bg-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-4xl font-semibold winky-font mb-2">
            <span className="text-[#B36F00]">With Friends</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-[#121717] winky-font">
            Team Up for Style
          </h2>
        </div>

        {/* Five Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Step 1: Pick a day */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center mb-4">
              <img src={PickDay} alt="PickDay" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#B36F00] font-bold text-xl mb-2 winky-font">
              Pick a day
            </h3>
            <p className="text-[#616161] font-['Inter'] text-base leading-relaxed">
              Choose a fun day and invite your friends.
            </p>
          </div>

          {/* Step 2: Bring Clothes */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center mb-4">
              <img src={Clothes} alt="Clothes" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#B36F00] font-bold text-xl mb-2 winky-font">
              Bring Clothes
            </h3>
            <p className="text-[#616161] font-['Inter'] text-base leading-relaxed">
              Ask everyone to bring clean clothes they don't wear anymore.
            </p>
          </div>

          {/* Step 3: Make Piles */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center mb-4">
              <img src={Pile} alt="Pile" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#B36F00] font-bold text-xl mb-2 winky-font">
              Make Piles
            </h3>
            <p className="text-[#616161] font-['Inter'] text-base leading-relaxed">
              Put clothes into groups by size or type.
            </p>
          </div>

          {/* Step 4: Take Turns */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center mb-4">
              <img src={Turn} alt="Turn" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#B36F00] font-bold text-xl mb-2 winky-font">
              Take Turns
            </h3>
            <p className="text-[#616161] font-['Inter'] text-base leading-relaxed">
              Everyone picks new outfits to take home.
            </p>
          </div>

          {/* Step 5: Give Back */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center mb-4">
              <img src={GiveBack} alt="GiveBack" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#B36F00] font-bold text-xl mb-2 winky-font">
              Give Back
            </h3>
            <p className="text-[#616161] font-['Inter'] text-base leading-relaxed">
              Any leftover clothes? Donate them to someone in need!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamUp;
