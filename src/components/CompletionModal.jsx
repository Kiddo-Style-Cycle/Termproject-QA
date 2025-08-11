import React from 'react';
import Lina from "../assets/images/Lina-happy.png";
import Button from './Button';

const CompletionModal = ({ 
  isVisible, 
  title = "Great Job!", 
  message = "You helped Lina repair her dress.", 
  onGoBack, 
  onNext,
  backButtonText = "Go back to Mission 1",
  nextButtonText = "Next",
  showBackButton = true,
  showNextButton = true,
  characterImage = Lina
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-3xl p-0 max-w-lg w-full mx-4 shadow-2xl overflow-hidden">
        {/* Pink background section - top 1/3 */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-pink-200"></div>
        
        {/* Content with padding */}
        <div className="relative z-10 p-8">
        {/* Character Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={characterImage} 
            alt="Character" 
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold winky-font text-center text-[#1E1E1E] mb-4">
          {title}
        </h2>

        {/* Message */}
        <p className="text-2xl text-center text-[#616161] mb-8 winky-font">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showBackButton && (
            <Button
              variant="outline"
              size="hero"
              onClick={onGoBack}
              className='rounded-xl w-[240px] whitespace-nowrap'
            >
              {backButtonText}
            </Button>
          )}
          
          {showNextButton && (
            <Button
              variant="primary"
              size="hero"
              onClick={onNext}
              className='rounded-xl w-[240px] whitespace-nowrap'
            >
              {nextButtonText}
            </Button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
