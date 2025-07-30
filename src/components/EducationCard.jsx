import React from 'react';
import Button from './Button';

const EducationCard = ({ 
  title = "Soft & Green!", 
  description = "Some clothes are made from soft stuff that keeps the Earth happy!",
  buttonText = "Let's Learn!",
  onButtonClick,
  bgColor = "bg-pink-200",
  buttonVariant = "primary",
  buttonSize = "large",
  imageUrl,
  imageAlt = title
}) => {
  // Image or placeholder
  const CardImage = () => {
    if (imageUrl) {
      return (
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full max-w-[336px] h-[270px] mx-auto mb-4 object-cover rounded-lg"
        />
      );
    }
    
    return (
      <div className="w-full max-w-[336px] h-[270px] mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-gray-500 text-center">
          <svg 
            className="w-12 h-12 mx-auto mb-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="text-sm">Image</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg w-full max-w-[360px] mx-auto`}>
      {/* Illustration */}
      <div className="flex justify-center mb-6">
        <CardImage />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-medium text-[#1E1E1E] text-left mb-3 winky-font">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-[#000000] text-left mb-6 font-['Inter'] text-sm leading-relaxed">
        {description}
      </p>
      
      {/* Call to Action Button */}
      <div className="flex justify-start">
        <Button 
          onClick={onButtonClick}
          variant={buttonVariant}
          size={buttonSize}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default EducationCard; 