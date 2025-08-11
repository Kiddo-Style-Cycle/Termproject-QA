import React from "react";
import Lina from "../../assets/images/Lina.png";
import Snail from "../../assets/images/Snail.png";
import Button from "../Button";

const GameStart = ({ onStart }) => {
  return (
    <>
      <style>{`
        @keyframes snailWalk {
          0% {
            transform: translateX(10vw);
          }
          100% {
            transform: translateX(calc(80vw - 100px));
          }
        }
        .snail-animation {
          animation: snailWalk 20s ease-in-out infinite;
        }
      `}</style>

      <section className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden px-6 pt-6 pb-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Small decorative snail */}
          <div className="absolute sm:bottom-32 bottom-52 left-0 snail-animation">
            <img
              src={Snail}
              alt="Snail"
              className="sm:w-[100px] w-[50px] h-full object-center"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mt-0 sm:mt-15 mb-4 sm:mb-6 winky-font">
            Explore Sustainable Fashion!
          </h1>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-medium md:text-lg text-[#616161] font-['Inter'] mb-2">
              Ready to make fashion better for the planet?
            </p>
            <p className="text-sm sm:text-medium md:text-lg text-[#616161] font-['Inter']">
              <strong>
                Join Lina on her mission to learn how to care, share, and
                repair!
              </strong>
            </p>
          </div>

          {/* Let's Start Button */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <Button
              size="large"
              variant="outline"
              onClick={onStart}
              className="hover:scale-105 transform transition-all duration-300 rounded-xl"
            >
              Let's start
            </Button>
          </div>

          {/* Character Image */}
          <div className="flex justify-center relative pt-10 sm:pt-0 mt-4 sm:mt-0 -mb-8 sm:mb-0">
            <img
              src={Lina}
              alt="Lina"
              className="w-[250px] sm:w-[300px] lg:w-[350px] h-full object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GameStart;
