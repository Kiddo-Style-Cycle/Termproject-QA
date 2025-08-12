// import Cotton from "../../assets/images/cotton.png";
// import Plastic from "../../assets/images/plastic.png";
import Thinking from "../../assets/images/thinking.png";
import Lina from "../../assets/images/lina-holdingclothes.png";
import GameBG from "../../assets/images/Game_BG.png";

export default function Mission2({ onGoBack }) {

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-no-repeat bg-center h-screen">
        <img
          src={GameBG}
          alt="Game background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Content Section */}
      <section className="h-full w-full flex flex-col items-center justify-center ">
        <div className="z-10 max-w-4xl mx-auto px-6 flex flex-col justify-center">
          <div className="text-center mb-4 mt-4">
            <h2 className="text-4xl font-bold winky-font mb-4 text-[#1E1E1E]">
             Eco-Friendly Fabric Quiz
            </h2>
            <p className="text-lg text-[#1E1E1E] font-['Inter']">
              Help Lina choose fabrics that are better for the planet!
            </p>
            <p className="text-lg text-[#1E1E1E] font-['Inter']">
             Pick the most eco-friendly option in the question below.
            </p>
          </div>


          {/* Buttons */}
          <div className="flex justify-center mb-10 gap-5">
            <button
              onClick={onGoBack}
              className="border-2 border-[#B30047] text-[#B30047] hover:text-white hover:bg-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
            >
              Go back
            </button>
            
          </div>
          {/* Images  */}
          <div className="flex justify-center space-x-10 md:space-x-2 mt-5 z-50">
            <img
              src={Lina}
              alt="Lina happy holding clothes"
              className="md:w-68 w-30"
            />
            <img
              src={Thinking}
              alt="Lina thinking"
              className="md:h-40 h-30 md:-translate-y-10 -translate-y-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
