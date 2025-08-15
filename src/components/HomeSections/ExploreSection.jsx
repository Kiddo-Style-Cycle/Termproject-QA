import React from 'react';
import EducationCard from '../EducationCard';
import SoftGreenImage from '../../assets/images/Soft&Green.png';
import FixItWithLinaImage from '../../assets/images/FixWithLina.png';
import BeAClothingHeroImage from '../../assets/images/ClothingHero.png';

const ExploreSection = () => {
  return (
    <section className="py-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1E1E1E] mb-12 winky-font">
          Time to Explore with Lina!
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Soft & Green Card */}
          <EducationCard 
            title="Soft & Green!"
            description="Some clothes are made from soft stuff that keeps the Earth happy!"
            buttonText="Let's Learn!"
            bgColor="bg-white-50"
            buttonVariant="primary"
            buttonSize="medium"
            imageUrl={SoftGreenImage}
            imageAlt="Soft and Green clothing illustration"
            onButtonClick={() => {
              // Navigate to learn page or show more info
              window.location.href = '/learn';
            }}
          />
          
          {/* Fix It with Lina Card */}
          <EducationCard 
            title="Fix It with Lina!"
            description="Don't throw clothes away! Let's patch them up and make them fun again!"
            buttonText="Let's Play!"
            bgColor="bg-white-50"
            buttonVariant="green"
            buttonSize="medium"
            imageUrl={FixItWithLinaImage}
            imageAlt="Fix It with Lina"
            onButtonClick={() => {
              // Navigate to game page or show repair activities
              window.location.href = '/game';
            }}
          />
          
          {/* Be a Clothing Hero Card */}
          <EducationCard 
            title="Be a Clothing Hero!"
            description="Some clothes are made in nice ways. Lina shows you how to choose the good ones!"
            buttonText="Let's Act!"
            bgColor="bg-white-50"
            buttonVariant="orange"
            buttonSize="medium"
            imageUrl={BeAClothingHeroImage}
            imageAlt="Be a Clothing Hero"
            onButtonClick={() => {
              // Navigate to act page or show action items
              window.location.href = '/act';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection; 